/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var num1; 
	var num2;
	var num3;
	var resultado;
	
	num1=document.getElementById('PrecioUno').value;
	num1= parseInt(num1);
	num2=document.getElementById('PrecioDos').value;
	num2= parseInt(num2);
	num3=document.getElementById('PrecioTres').value;
	num3= parseInt(num3);
	
	resultado=num1+num2+num3;
	resultado= parseInt(resultado);
	
	alert("la suma de los precios es: "+resultado);
}
function Promedio () 
{
	var num1; 
	var num2;
	var num3;
	var resultado;
	var promedio;

	num1=document.getElementById('PrecioUno').value;
	num1= parseInt(num1);
	num2=document.getElementById('PrecioDos').value;
	num2= parseInt(num2);
	num3=document.getElementById('PrecioTres').value;
	num3= parseInt(num3);
	
	resultado=num1+num2+num3;
	resultado= parseInt(resultado);
	promedio=resultado/3;
	promedio= parseInt(promedio);

	alert("el promedio es: "+promedio);
	
}
function PrecioFinal () 
{
	
var num1; 
	var num2;
	var num3;
	var resultado;
	var iva;
	var PrecioFinal;
	
	num1=document.getElementById('PrecioUno').value;
	num1= parseInt(num1);
	num2=document.getElementById('PrecioDos').value;
	num2= parseInt(num2);
	num3=document.getElementById('PrecioTres').value;
	num3= parseInt(num3);
	
	resultado=num1+num2+num3;
	resultado= parseInt(resultado);
	iva=resultado*21/100;
	iva= parseInt(iva);
	PrecioFinal=resultado+iva;
	PrecioFinal= parseInt(PrecioFinal);


	alert("el precio final es: "+PrecioFinal);



}