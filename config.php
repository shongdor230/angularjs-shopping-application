<?php

$host = "localhost"; /* Host name */
$user = "root"; /* User */
$password = "johny01"; /* Password */
$dbname = "database_schema"; /* Database name */

$con = mysqli_connect($host, $user, $password,$dbname);
// Check connection
if (!$con) {
 die("Connection failed: " . mysqli_connect_error());
}

?>