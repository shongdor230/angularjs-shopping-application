<?php
   $connect= mysqli_connect("localhost:3306","root","johny01","database_schema");
   $data= json_decode(file_get_contents("php://input"));
   if(count($data)>0){
    $foodId= mysqli_real_escape_string($connect,$data->foodId);
   $query1= "DELETE FROM shoppingitems WHERE FoodID='$foodId'";
   $query_result1 = mysqli_query($connect,$query1);
   $query2= "DELETE FROM recipebook WHERE FoodId='$foodId'";
   $query_result2 = mysqli_query($connect,$query2);
   if($query_result1 && $query_result2){
       echo "Data deleted successfully";
   }
   else{
       echo "error";
   }
       
   }
?>

