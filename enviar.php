<?php 

$header = "De: " . $_POST['nombre'] . " "; 

$mensaje = "Este mensaje fue enviado por " . $_POST['nombre'] . ".\n"; 
$mensaje .= "Su e-mail es: " . $_POST['email'] . ".\n"; 
$mensaje .= "Mensaje: " . $_POST['mensaje'] . ".\n\n"; 
$mensaje .= "Enviado el " . date('d/m/Y', time()); 

$para = "contacto@cuedis.cl"; 
$asunto = "Tienes una nueva consulta de "  . $_POST['nombre'] . "."; 

mail($para, $asunto, utf8_decode($mensaje), $header); 

echo "<br><br><br><br><br><br><br><p align='center'><img src='images/cuedis.png' width='100px'><br><br><font size='5px'>Su correo se ha enviado correctamente<br>Te responder&eacute; lo m&aacutes pronto posible<br>Gracias por confiar en nosotros<br><a href='index.html'>VOLVER</a></font></p>";
?>
