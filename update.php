<?php
   $connect= mysqli_connect("localhost:3306","root","johny01","database_schema");
   $data= json_decode(file_get_contents("php://input"));
   if(count($data)>0){
    
    if($data->action=='save_edit'){
        $shoppingId= mysqli_real_escape_string($connect,$data->shoppingId);
        $quantity=mysqli_real_escape_string($connect,$data->quantity);
        $totalAmount= mysqli_real_escape_string($connect,$data->totalAmount);
        $query = "UPDATE shoppingitems SET quantity='$quantity',amount_total='$totalAmount'WHERE ShoppingID='$shoppingId'";
       if(mysqli_query($connect,$query)){
           echo "Data updated";
       }
       else{
           echo "error";
       }

    }else if($data->action=='update_recipe'){
    $foodId= mysqli_real_escape_string($connect,$data->foodId);
    $ItemName=mysqli_real_escape_string($connect,$data->itemName);
    $img_url= mysqli_real_escape_string($connect,$data->imgUrl);
    $price=mysqli_real_escape_string($connect,$data->price);
    $description= mysqli_real_escape_string($connect,$data->description);
    $query1="UPDATE shoppingitems SET foodName='$ItemName',amount_per_item='$price' WHERE FoodId='$foodId'";
    $query2 = "UPDATE recipebook SET ItemName='$ItemName',img_url='$img_url',price='$price',Descrip='$description' WHERE FoodId='$foodId'";
       if(mysqli_query($connect,$query1) && mysqli_query($connect,$query2)){
           echo "Data updated";
       }
       else{
           echo "error";
       }
   }
}
?>
