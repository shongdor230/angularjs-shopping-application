<?php
   $connect= mysqli_connect("localhost:3306","root","johny01","database_schema");
   $data= json_decode(file_get_contents("php://input"));
   if(count($data)>0){
    $shoppingId= mysqli_real_escape_string($connect,$data->shoppingId);
    $query = "DELETE FROM shoppingItems WHERE shoppingID='$shoppingId'";
       if(mysqli_query($connect,$query)){
           echo "Data deleted successfully";
       }
       else{
           echo "error";
       }
   }
?>

