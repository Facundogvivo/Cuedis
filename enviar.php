<?php 

$cabeceras = 'From: '. $_POST['email'] . "\r\n" . //La direccion de correo desde donde supuestamente se envió
    'Reply-To: '. $_POST['email'] . "\r\n" . //La direccion de correo a donde se responderá (cuando el recepto haga click en RESPONDER)
    'X-Mailer: PHP/' . phpversion();  //información sobre el sistema de envio de correos, en este caso la version de PHP


$mensaje = "Este mensaje fue enviado por " . $_POST['nombre'] . ".\n\n"; 
$mensaje .= "Su e-mail es: " . $_POST['email'] . ".\n\n"; 
$mensaje .= "Mensaje: " . $_POST['mensaje'] . ".\n\n"; 
$mensaje .= "Enviado el " . date('d/m/Y'); 

$para = "facundo.gvivo@gmail.com"; 
$titulo = "Tienes una nueva consulta de "  . $_POST['nombre'] . "."; 

mail($para, $titulo, $mensaje, $cabeceras); 

echo "<div id=wrapper><br><br><br><br><br><br><br><p align='center'><img src='imagenes/cuedis.png' width='100px'><br><br><font size='5px'>Su correo se ha enviado correctamente<br>Te responder&eacute; lo m&aacutes pronto posible<br>Gracias por confiar en nosotros<br><a href='contacto.html'>Ir a Contacto</a></font></p></div>";
?>