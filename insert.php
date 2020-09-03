<?php
   $connect= mysqli_connect("localhost:3306","root","johny01","database_schema");
   $data= json_decode(file_get_contents("php://input"));
   if(count($data)>0){

    if($data->action=='insert_new_recipe'){
        $ItemName=mysqli_real_escape_string($connect,$data->itemName);
        $img_url= mysqli_real_escape_string($connect,$data->imgUrl);
        $price=mysqli_real_escape_string($connect,$data->price);
        $description= mysqli_real_escape_string($connect,$data->description);
        $query = "INSERT INTO recipebook(ItemName,price,img_url,Descrip) VALUES ('$ItemName','$price','$img_url','$description')";
        if(mysqli_query($connect,$query)){
            echo "Data inserted";
        }
        else{
            echo "error";
        }
    }else if($data->action=='save_ingredients'){
        $foodId=mysqli_real_escape_string($connect,$data->foodId);
       $ingredient1= mysqli_real_escape_string($connect,$data->ingredient1);
       $ingredient2=mysqli_real_escape_string($connect,$data->ingredient2);
       $query = "UPDATE recipebook SET ingredient1='$ingredient1',ingredient2='$ingredient2' WHERE FoodId='$foodId'";
       if(mysqli_query($connect,$query)){
           echo "Data inserted";
       }
       else{
           echo "error";
       }

    } else if($data->action=='final_order'){
        $fullName=mysqli_real_escape_string($connect,$data->fullName);
        $phone= mysqli_real_escape_string($connect,$data->phone);
        $address=mysqli_real_escape_string($connect,$data->address);
        $myfoodCollection=mysqli_real_escape_string($connect,$data->myfoodCollection);
        $query = "INSERT INTO ordereditems(fullName,phoneNo,myaddress,foodOrdered) VALUES ('$fullName','$phone','$address','$myfoodCollection')";
        if(mysqli_query($connect,$query)){
            echo "Data inserted";
        }
        else{
            echo "errors inserting";
        }

    }
       
   }

   mysqli_close($connect);
?>