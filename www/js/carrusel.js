//variables
var fotos = 
[
"img/galeria/imagen1.jpg",
"img/galeria/imagen2.jpg",
"img/galeria/imagen3.jpg",
"img/galeria/imagen4.jpg",
"img/galeria/imagen5.jpg",
"img/galeria/imagen6.jpg"
];

var tiempo_carr = 5000;
var ancho_carr=800*fotos.length;
var pos_carr = 0;
var actual_carr = 1;
var limite_carr = ancho_carr - 800;

//Funciones

function cargar_fotos()
{
	$('#fotos').css('width' ,ancho_carr);
	for(var i = 0; i<fotos.length ; i++)
	{
		$('#fotos').append("<img class='foto_gale' src='" + fotos[i] + "'>");
	}
}

function cambio_foto()
{
	if((pos_carr*-1)< limite_carr){
	pos_carr = (800 * actual_carr)*-1;
	$('#fotos').animate({"margin-left":pos_carr},500);
	actual_carr++;
}

else
	{
	$('#fotos').animate({"margin-left":0},500);
	actual_carr=1;
	pos_carr=0;
	}
}


//Eventos
$(document).ready(function()
{
	cargar_fotos();
	setInterval(cambio_foto,tiempo_carr);
});