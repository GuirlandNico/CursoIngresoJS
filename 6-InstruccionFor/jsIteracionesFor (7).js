function mostrar()
{
var resto;	
var alto;
var numero;
var divisores=0;

alto=prompt ("Utilizar break en el numero: ");
alto=parseInt(alto);

for (numero=1;;)
{

 alert ("el numero es: "+numero )
 
 resto=numero/alto; 	

if (resto==5)
	{
	document.write("numero divisor: "+numero+"<BR>");
	divisores++;}

if (numero==alto)
		{break;}
numero++;


}

document.write("numeros divisor: "+divisores+"<BR>");
}//FIN DE LA FUNCIÓN