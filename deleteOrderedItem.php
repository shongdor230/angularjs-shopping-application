<?php
   $connect= mysqli_connect("localhost:3306","root","johny01","database_schema");
   $data= json_decode(file_get_contents("php://input"));
   if(count($data)>0){
    $orderId= mysqli_real_escape_string($connect,$data->orderId);
   $query= "DELETE FROM ordereditems WHERE orderId='$orderId'";
   $query_result = mysqli_query($connect,$query);
   if($query_result){
       echo "Data deleted successfully";
   }
   else{
       echo "error";
   }
       
   }
?>