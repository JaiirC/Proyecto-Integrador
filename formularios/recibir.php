<?php
    $con=mysqli_connect('localhost','root','','mensajes') or die ('Error en la conexion servidor');
    $sql="INSERT INTO mensajeria VALUES(null,'".$_POST["nombre"]."','".$_POST["telefono"]."','".$_POST["email"]."','".$_POST["mssg"]."')";
    $resultado=mysqli_query($con,$sql) or die('Error en el query database');
    mysqli_close($con);

    echo 'El nombre ingresado es: '.$_POST["nombre"].'<br>';
    echo 'El correo es: '.$_POST["telefono"].'<br>';
    echo 'El pass es: '.$_POST["email"].'<br>';
    echo '<a href="loginvista.html"></a>';
?>