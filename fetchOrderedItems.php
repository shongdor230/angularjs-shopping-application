<?php
include 'config.php';

$sel = mysqli_query($con,"select * from orderedItems");
$data = array();

while ($row = mysqli_fetch_array($sel)) {
 $data[] = array("orderId"=>$row['orderId'],"fullName"=>$row['fullName'],"foodOrdered"=>$row['foodOrdered'],"phone"=>$row['phoneNo'],"myaddress"=>$row['myaddress']);
}
echo json_encode($data);
?>