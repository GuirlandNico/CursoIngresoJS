function mostrar()

{ 
var alto;
var numero;

	alto=prompt ("Utilizar break en el numero: ");
	alto=parseInt(alto);

	for (numero=0;;)
{

	alert ("el numero es: "+numero )
	 

	if (numero==alto)
		{break;}
numero++;

document.write("numeros ascendentes: "+numero+"<BR>");
 
}
}
	
//FIN DE LA FUNCIÓN