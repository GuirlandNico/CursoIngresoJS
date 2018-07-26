/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{  
	var temperatura;
	var centígrados;

	Temperatura=document.getElementById('Temperatura').value;
	Temperatura=parseInt(Temperatura);

	centígrados=(Temperatura-32)/1.8;
	centígrados=parseInt(centígrados);

	alert (Temperatura+" grados Fahrenheit son "+centígrados+" centígrados." );

	
}

function CentigradosFahrenheit () 
{
	var temperatura;
	var Fahrenheit;

	Temperatura=document.getElementById('Temperatura').value;
	Temperatura=parseInt(Temperatura);

	Fahrenheit=(Temperatura*1.8)+32;
	Fahrenheit = parseInt (Fahrenheit);

	alert ( Temperatura+" centígrados son "+Fahrenheit+" grados Fahrenheit." );




}
