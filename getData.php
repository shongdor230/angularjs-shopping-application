<?php
include 'config.php';

$sel = mysqli_query($con,"select * from recipebook");
$data = array();

while ($row = mysqli_fetch_array($sel)) {
 $data[] = array("foodId"=>$row['FoodId'],"itemName"=>$row['ItemName'],"price"=>$row['price'],"imgUrl"=>$row['img_url'],"description"=>$row['Descrip']);
}
echo json_encode($data);
?>

