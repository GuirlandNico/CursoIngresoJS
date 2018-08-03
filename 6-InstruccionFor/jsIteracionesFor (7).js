function mostrar()
{
/*var resultado2;*/	
var resultado;	
var elegido;
var contador;
var divisores=0;

elegido=prompt ("Utilizar break en el numero: ");
elegido=parseInt(elegido);

for (contador=1;;)
{

 alert ("el numero es: "+contador )
 
 resultado=contador%elegido; 	
resultado=parseInt(resultado);
/*resultado2=elegido/elegido;*/

if (resultado==0)
	{
	document.write("numero divisor: "+contador+"<BR>");
	divisores++;}

if (contador==elegido)
		{break;}
contador++;


}

document.write("numeros divisor: "+divisores+"<BR>");
}//FIN DE LA FUNCIÓN