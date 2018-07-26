/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var totalL;
	var ancho;
	var totalA;
	var cantAlambre;
	largo=document.getElementById('Largo').value;
	largo= parseInt (largo);
	ancho=document.getElementById('Ancho').value;
	ancho= parseInt(largo);

	totalL=(largo*1);
	totalL= parseInt (totalL);
	totalA=(ancho*1);
	totalA= parseInt (totalA);

	cantAlambre= (totalL+totalA)*6;
	cantAlambre= parseInt (cantAlambre);

	alert ("la cantidad de alambre es: "+cantAlambre);




}
function Circulo ()  
{
	var radio;
	var diametro;
	var Circulo;
	var cantAlambre;

	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);
	diametro=radio*2;
	Circulo=diametro*3.14;
	cantAlambre=Circulo*3;
	
alert ("la cantidad de alambre es: "+cantAlambre);



}
function Materiales () 
{
	var largo;
	var ancho;
	var cuadrados;
	var cemento;
	var cal;

	largo=document.getElementById('Largo').value;
	largo= parseInt (largo);
	ancho=document.getElementById('Ancho').value;
	ancho= parseInt(largo);

	cuadrados=ancho*largo;
	
	alert ("es"+cuadrados);

	cemento=cuadrados*1;
	

	cal=cuadrados*1.5;
	

alert ("la cantidad de cemento es: "+cemento);
alert ("la cantidad de cal es: "+cal);



}