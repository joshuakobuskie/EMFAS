#!/usr/bin/php -q
<?php
$pipedEmailIn = file_get_contents('php://stdin');

// splits email into parts based on boundaries 
// will catch things that aren't boundaries but is enough for finding the attachment
$emailParts = explode("--", $pipedEmailIn);
$csvData = "";

// finds attachment and splits it into headers and data
foreach ($emailParts as $part) {
    if (strpos($part, "attachment") !== false and strpos($part, "csv")) {
        $attachmentParts = explode("\r\n\r\n", $part);
        break;
    }
}

// decodes csv data
$attachmentData = explode("\n", $attachmentParts[1]);
foreach ($attachmentData as $line) {
    $csvData .= base64_decode($line);
}

// removes title from data
// only has column headers and data
$csvRows = array_slice(explode("\n", $csvData), 2);
$headers = explode(",", $csvRows[0]);
$responseTimeColumnIndex = 4;
$milesDrivenColumnIndex = 8;

// finds index of columns needed if columns change
foreach ($headers as $index => $header) {
    if (trim(strtolower($header), "\"") == "response time") {
        $responseTimeColumnIndex = $index;
    }

    if (trim(strtolower($header), "\"") == "patient mileage") {
        $milesDrivenColumnIndex = $index;
    }
}

// creates an array of row arrays
$csvArray = array();
foreach ($csvRows as $row) {
    $stack = array();
    $rowArray = explode(",", $row);
    
    // some values have commas in it, messes with the explode
    if (count($rowArray) != count($headers)) {
        $formattedRow = "";
        
        // iterates through row, removing commas that are in the data
        for ($i = 0; $i < strlen($row); $i++) {
            $char = substr($row, $i, 1);

            if (empty($stack) and $char == "\"") {
                array_push($stack, "comma");
            }
            elseif (!empty($stack) and $char == "\"") {
                array_pop($stack);
            }
            elseif (!empty($stack) and $char == ",") {
                continue;
            }
            
            $formattedRow .= $char;
        }    

        $rowArray = explode(",", $formattedRow);
    }

    array_push($csvArray, $rowArray);
}

$avgResponseTime = 0;
$responseTimeCounter = 0;
$responseTimeSum = 0;
$totalCallsTaken = count($csvArray) - 1;
$milesDriven = 0;
$counter = 0;

// get data needed for website
foreach ($csvArray as $row) {
    // skip headers
    if ($counter++ == 0) {
        continue;
    }

    $rt = trim($row[$responseTimeColumnIndex], "\"");
    $md = trim($row[$milesDrivenColumnIndex], "\"");

    if (!empty($rt)) {
        $responseTimeCounter++;
        $responseTimeSum += floatval($rt);
    }

    if (!empty($md)) {
        $milesDriven += floatval($md);
    }
}

$avgResponseTime = $responseTimeSum / $responseTimeCounter;

// print_r($avgResponseTime . "\n");
// print_r($totalCallsTaken . "\n");
// print_r($milesDriven . "\n");

$servername = "localhost";
$username = "emfasor_data";
$password = "gmp7iEW]~npo";
$dbname = "emfasor_info";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// update data in database
$sql = $conn->prepare("UPDATE `Stats` SET `CallsTaken` = ?,`ResponseTime` = ?,`MilesDriven` = ?");
$sql->bind_param("idd", $totalCallsTaken, $avgResponseTime, $milesDriven);
$sql->execute();
$result = $sql->get_result();

$sql->close();
if ($result){
    echo json_encode("Success");
}
else{
    echo json_encode("Failed!");
}
  
$conn->close();

date_default_timezone_set('UTC');
$file = fopen("temp.txt", "w");
fwrite($file, "EXECUTED THE SCRIPT: " . date(DATE_RFC2822));
fclose($file);
?>