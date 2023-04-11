#!/usr/bin/php -q

<?php
$f = file_get_contents('php://stdin');

$email = explode("\n", $f);
$beginningFound = false;
$csvData = "";

foreach ($email as $line) {
    if (strpos($line, "X-Attachment-Id") !== false) {
        $beginningFound = true;
        continue;
    }

    if (strpos($line, "--") !== false and $beginningFound) {
        break;
    }

    if ($beginningFound) {
        $modded = base64_decode($line);
        $csvData .= $modded;
    }
}

$csvRows = array_slice(explode("\n", $csvData), 2);
$headers = explode(",", $csvRows[0]);
$csvArray = array();

foreach ($csvRows as $row) {
    $rowModded = explode(",", $row);

    // some values have commas in it, messes with the explode
    if (count($rowModded) != count($headers)) {
        $rowModded[6] .= $rowModded[7];
        array_splice($rowModded, 7, 1);
    }

    array_push($csvArray, $rowModded);
}

$avgResponseTime = 0;
$totalCallsTaken = 0;
$milesDriven = 0;
$responseTimeSum = 0;
$counter = 0;

foreach ($csvArray as $row) {
    if ($counter++ == 0) {
        continue;
    }

    $responseTimeSum += floatval(trim($row[4], "\""));
    $totalCallsTaken++;
    $milesDriven += floatval(trim($row[8], "\""));
}

$avgResponseTime = $responseTimeSum / $totalCallsTaken;


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


