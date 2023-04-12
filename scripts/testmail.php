<?php
$pipe = popen("php -q data.php", "w");
$f = file_get_contents("report.eml");
if ($pipe) {
    // Write MIME email headers and body to the pipe
    fwrite($pipe, $f);
    fclose($pipe);
} else {
    echo "Failed to open pipe to recipient PHP script.";
}
?>