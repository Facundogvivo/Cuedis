function aleatorio(a,b) 

{

    return Math.round(Math.random()*(b-a)+parseInt(a));

}

var facundo				=	"<br /><p>Creado por <a href=http://www.facundogonzalezvivo.cl>Facundo Gonzalez Vivo</a></p>";

var inicio 				=	"<ul><li><a href=index.html>INICIO</a></li><li><a href=operaciones.html>OPERACIONES</a></li><li><a href=contacto.html>CONTACTO</a></li></ul>";

var operaciones 		=	"<ul><li><a href=sumaConReserva.html>Suma con reserva</a></li><li><a href=sumaSinReserva.html>Suma sin reserva</a></li><li><a href=restaConReserva.html>Resta con reserva</a></li><li><a href=restaSinReserva.html>Resta sin reserva</a></li><li><a href=multiplicacion.html>Multiplicación</a></li><li><a href=division.html>División</a></li></ul>";

var sumaConReserva 		=	"<ul><li><a href=sumaConReserva11.html>Suma con reserva 1 y 1</a></li><li><a href=sumaConReserva22.html>Suma con reserva 2 y 2</a></li><li><a href=sumaConReserva33.html>Suma con reserva 3 y 3</a></li><li><a href=sumaConReserva44.html>Suma con reserva 4 y 4</a></li><li><a href=sumaConReserva55.html>Suma con reserva 5 y 5</a></li></ul>";

var sumaSinReserva 		=	"<ul><li><a href=sumaSinReserva11.html>Suma sin reserva 1 y 1</a></li><li><a href=sumaSinReserva22.html>Suma sin reserva 2 y 2</a></li><li><a href=sumaSinReserva33.html>Suma sin reserva 3 y 3</a></li><li><a href=sumaSinReserva44.html>Suma sin reserva 4 y 4</a></li><li><a href=sumaSinReserva55.html>Suma sin reserva 5 y 5</a></li></ul>";

var restaConReserva 	=	"<ul><li><a href=restaConReserva11.html>Resta con reserva 1 y 1</a></li><li><a href=restaConReserva22.html>Resta con reserva 2 y 2</a></li><li><a href=restaConReserva33.html>Resta con reserva 3 y 3</a></li><li><a href=restaConReserva44.html>Resta con reserva 4 y 4</a></li><li><a href=restaConReserva55.html>Resta con reserva 5 y 5</a></li></ul>";

var restaSinReserva 	=	"<ul><li><a href=restaSinReserva11.html>Resta sin reserva 1 y 1</a></li><li><a href=restaSinReserva22.html>Resta sin reserva 2 y 2</a></li><li><a href=restaSinReserva33.html>Resta sin reserva 3 y 3</a></li><li><a href=restaSinReserva44.html>Resta sin reserva 4 y 4</a></li><li><a href=restaSinReserva55.html>Resta sin reserva 5 y 5</a></li></ul>";

var multiplicacion 		=	"<ul><li><a href=multiplicacion11.html>Multiplicación 1 y 1</a></li><li><a href=multiplicacion21.html>Multiplicación 2 y 1</a></li><li><a href=multiplicacion31.html>Multiplicación 3 y 1</a></li><li><a href=multiplicacion41.html>Multiplicación 4 y 1</a></li><li><a href=multiplicacion51.html>Multiplicación 5 y 1</a></li><li><a href=multiplicacion22.html>Multiplicación 2 y 2</a></li><li><a href=multiplicacion32.html>Multiplicación 3 y 2</a></li><li><a href=multiplicacion42.html>Multiplicación 4 y 2</a></li><li><a href=multiplicacion52.html>Multiplicación 5 y 2</a></li><li><a href=multiplicacion33.html>Multiplicación 3 y 3</a></li><li><a href=multiplicacion43.html>Multiplicación 4 y 3</a></li><li><a href=multiplicacion53.html>Multiplicación 5 y 3</a></li></ul>";

var division 			=	"<ul><li><a href=division11.html>División 1 y 1</a></li><li><a href=division21.html>División 2 y 1</a></li><li><a href=division31.html>División 3 y 1</a></li><li><a href=division41.html>División 4 y 1</a></li><li><a href=division51.html>División 5 y 1</a></li><li><a href=division22.html>División 2 y 2</a></li><li><a href=division32.html>División 3 y 2</a></li><li><a href=division42.html>División 4 y 2</a></li><li><a href=division52.html>División 5 y 2</a></li><li><a href=division33.html>División 3 y 3</a></li><li><a href=division43.html>División 4 y 3</a></li><li><a href=division53.html>División 5 y 3</a></li></ul>";

function formula() {

var operacion	=	document.getElementById("operacion").value

    switch (operacion)
        {
        case '+': 
        if (numero1 + numero2 == resultado) {
    
    divC = document.getElementById("felicitaciones");
    divC.style.display = "";
    var divC = "document.getElementById('felicitaciones').style.display = 'none'"; 
    var timeOutPeriod = 3000; 
    var hideTimer = setTimeout(divC, timeOutPeriod);
    borrar();

    divT = document.getElementById("intentalo");
    divT.style.display = "none";
    calcula_aleatorio_formulario();

    imagen = "Correcto"
    correctos = correctos + 1
    document.getElementById('correcto').value = correctos;

} else {
    divC = document.getElementById("felicitaciones");
    divC.style.display = "none";

    divT = document.getElementById("intentalo");
    divT.style.display = "";
    var divT = "document.getElementById('intentalo').style.display = 'none'"; 
    var timeOutPeriod = 3000; 
    var hideTimer = setTimeout(divT, timeOutPeriod); 
    borrar();

    imagen = "Incorrecto"
    incorrectos = incorrectos + 1
    document.getElementById('incorrecto').value = incorrectos;
    
}

  contador++;

  var tr, td, tabla;

  tabla = document.getElementById('dataTable');
  tr = tabla.insertRow(tabla.rows.length);

  td = tr.insertCell(tr.cells.length);
  td.innerHTML = "<p align=center>" + contador + "</p>";
  
  td = tr.insertCell(tr.cells.length);
  td.innerHTML = "<p align=center>" + numero1 + "</p>";

  td = tr.insertCell(tr.cells.length);
  td.innerHTML = "<p align=center>" + numero2 + "</p>";

  td = tr.insertCell(tr.cells.length);
  td.innerHTML = "<p align=center>" + resultado + "</p>";
  
  td = tr.insertCell(tr.cells.length);
  td.innerHTML = "<p align=center>" + imagen + "</p>";
         
        break;
     
        case '-': 
        if (numero1 - numero2 == resultado) {
    
    divC = document.getElementById("felicitaciones");
    divC.style.display = "";
    var divC = "document.getElementById('felicitaciones').style.display = 'none'"; 
    var timeOutPeriod = 3000; 
    var hideTimer = setTimeout(divC, timeOutPeriod);
    borrar();

    divT = document.getElementById("intentalo");
    divT.style.display = "none";
    calcula_aleatorio_formulario();

    imagen = "Correcto"
    correctos = correctos + 1
    document.getElementById('correcto').value = correctos;

} else {
    divC = document.getElementById("felicitaciones");
    divC.style.display = "none";

    divT = document.getElementById("intentalo");
    divT.style.display = "";
    var divT = "document.getElementById('intentalo').style.display = 'none'"; 
    var timeOutPeriod = 3000; 
    var hideTimer = setTimeout(divT, timeOutPeriod); 
    borrar();

    imagen = "Incorrecto"
    incorrectos = incorrectos + 1
    document.getElementById('incorrecto').value = incorrectos;
    
}

  contador++;

  var tr, td, tabla;

  tabla = document.getElementById('dataTable');
  tr = tabla.insertRow(tabla.rows.length);

  td = tr.insertCell(tr.cells.length);
  td.innerHTML = "<p align=center>" + contador + "</p>";
  
  td = tr.insertCell(tr.cells.length);
  td.innerHTML = "<p align=center>" + numero1 + "</p>";

  td = tr.insertCell(tr.cells.length);
  td.innerHTML = "<p align=center>" + numero2 + "</p>";

  td = tr.insertCell(tr.cells.length);
  td.innerHTML = "<p align=center>" + resultado + "</p>";
  
  td = tr.insertCell(tr.cells.length);
  td.innerHTML = "<p align=center>" + imagen + "</p>";

        break;
          
        case '*':
        if (numero1 * numero2 == resultado) {
    
    divC = document.getElementById("felicitaciones");
    divC.style.display = "";
    var divC = "document.getElementById('felicitaciones').style.display = 'none'"; 
    var timeOutPeriod = 3000; 
    var hideTimer = setTimeout(divC, timeOutPeriod);
    borrar();

    divT = document.getElementById("intentalo");
    divT.style.display = "none";
    calcula_aleatorio_formulario();

    imagen = "Correcto"
    correctos = correctos + 1
    document.getElementById('correcto').value = correctos;

} else {
    divC = document.getElementById("felicitaciones");
    divC.style.display = "none";

    divT = document.getElementById("intentalo");
    divT.style.display = "";
    var divT = "document.getElementById('intentalo').style.display = 'none'"; 
    var timeOutPeriod = 3000; 
    var hideTimer = setTimeout(divT, timeOutPeriod); 
    borrar();

    imagen = "Incorrecto"
    incorrectos = incorrectos + 1
    document.getElementById('incorrecto').value = incorrectos;
    
}

  contador++;

  var tr, td, tabla;

  tabla = document.getElementById('dataTable');
  tr = tabla.insertRow(tabla.rows.length);

  td = tr.insertCell(tr.cells.length);
  td.innerHTML = "<p align=center>" + contador + "</p>";
  
  td = tr.insertCell(tr.cells.length);
  td.innerHTML = "<p align=center>" + numero1 + "</p>";

  td = tr.insertCell(tr.cells.length);
  td.innerHTML = "<p align=center>" + numero2 + "</p>";

  td = tr.insertCell(tr.cells.length);
  td.innerHTML = "<p align=center>" + resultado + "</p>";
  
  td = tr.insertCell(tr.cells.length);
  td.innerHTML = "<p align=center>" + imagen + "</p>";

        break;
     
        default: 

if ((resultado * numero2) + resto == numero1) {
    
    divC = document.getElementById("felicitaciones");
    divC.style.display = "";
    var divC = "document.getElementById('felicitaciones').style.display = 'none'"; 
    var timeOutPeriod = 3000; 
    var hideTimer = setTimeout(divC, timeOutPeriod);
    borrar();

    divT = document.getElementById("intentalo");
    divT.style.display = "none";
    calcula_aleatorio_formulario();

    imagen = "Correcto"
    correctos = correctos + 1
    document.getElementById('correcto').value = correctos;

} else {
    divC = document.getElementById("felicitaciones");
    divC.style.display = "none";

    divT = document.getElementById("intentalo");
    divT.style.display = "";
    var divT = "document.getElementById('intentalo').style.display = 'none'"; 
    var timeOutPeriod = 3000; 
    var hideTimer = setTimeout(divT, timeOutPeriod); 
    borrar();

    imagen = "Incorrecto"
    incorrectos = incorrectos + 1
    document.getElementById('incorrecto').value = incorrectos;
    
}

  contador++;

  var tr, td, tabla;

  tabla = document.getElementById('dataTable');
  tr = tabla.insertRow(tabla.rows.length);

  td = tr.insertCell(tr.cells.length);
  td.innerHTML = "<p align=center>" + contador + "</p>";
  
  td = tr.insertCell(tr.cells.length);
  td.innerHTML = "<p align=center>" + numero1 + "</p>";

  td = tr.insertCell(tr.cells.length);
  td.innerHTML = "<p align=center>" + numero2 + "</p>";

  td = tr.insertCell(tr.cells.length);
  td.innerHTML = "<p align=center>" + resto + "</p>";

  td = tr.insertCell(tr.cells.length);
  td.innerHTML = "<p align=center>" + resultado + "</p>";
  
  td = tr.insertCell(tr.cells.length);
  td.innerHTML = "<p align=center>" + imagen + "</p>";

        break;       
	    }

    document.getElementById("totales").value = contador;
}

function insertar(){

document.getElementById("ejtotales").innerHTML = document.getElementById("totales").value;
document.getElementById("ejCorrecto").innerHTML = document.getElementById("correcto").value;
document.getElementById("ejIncorrecto").innerHTML = document.getElementById("incorrecto").value;
var rendimiento = (parseInt(document.getElementById("correcto").value)/parseInt(document.getElementById("totales").value))*100
document.getElementById("ejRendimiento").innerHTML =  rendimiento.toFixed() + " %";
}
