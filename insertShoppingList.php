<?php
   $connect= mysqli_connect("localhost:3306","root","johny01","database_schema");
   $data= json_decode(file_get_contents("php://input"));
   if(count($data)>0){

    
       $foodId=mysqli_real_escape_string($connect,$data->foodId);
       $name= mysqli_real_escape_string($connect,$data->name);
       $amount=mysqli_real_escape_string($connect,$data->amount);
       $quantity= mysqli_real_escape_string($connect,$data->quantity);
       $amountTotal= mysqli_real_escape_string($connect,$data->amountTotal);
       //$query = "INSERT INTO shoppingitems(foodName,amount_per_item,quantity,amount_total,FoodID) VALUES ('$name','$amount','$quantity','$amountTotal','$foodId')";
       $query = "INSERT INTO shoppingitems(foodName,amount_per_item,quantity,amount_total,FoodID) VALUES ('$name','$amount','$quantity','$amountTotal','$foodId')";
       if(mysqli_query($connect,$query)){
           echo "Data inserted";
       }
       else{
           echo "error";
       }
   }

   mysqli_close($connect);
?>