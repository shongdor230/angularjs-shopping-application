<?php
include 'config.php';

$sel = mysqli_query($con,"select * from shoppingitems");
$data = array();

while ($row = mysqli_fetch_array($sel)) {
 $data[] = array("shoppingId"=>$row['ShoppingID'],"foodName"=>$row['foodName'],"amount_per_item"=>$row['amount_per_item'],"quantity"=>$row['quantity']
 ,"amount_total"=>$row['amount_total'],"FoodId"=>$row['FoodID']);
}
echo json_encode($data);
?>

