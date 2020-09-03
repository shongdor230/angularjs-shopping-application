<?php
include 'config.php';

$sel = mysqli_query($con,"select amount,quantity_total from recipebook where foodID='$foodId'");
$data = array();

while ($row = mysqli_fetch_array($sel)) {
 $data[] = array("foodId"=>$row['FoodId'],"itemName"=>$row['ItemName'],"price"=>$row['price'],"imgUrl"=>$row['img_url']);
}
echo json_encode($data);


?>

