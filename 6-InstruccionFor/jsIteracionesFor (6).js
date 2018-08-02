function mostrar()
{
var resto;	
var alto;
var numero;
var pares=0;

	alto=prompt ("Utilizar break en el numero: ");
	alto=parseInt(alto);

	for (numero=1;;)
{

 alert ("el numero es: "+numero )
 
 resto=numero%2; 	

if (resto==0)
	{
	document.write("numero par: "+numero+"<BR>");
	pares++;}

if (numero==alto)
		{break;}
numero++;



}
document.write("cantidad de numeros pares: "+pares+"<BR>");


}//FIN DE LA FUNCIÓN