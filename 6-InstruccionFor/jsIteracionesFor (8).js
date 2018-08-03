function mostrar()
{
	var numeroAnterior;
	var numeroIngresado;
	var divisores;
	var numerorecorrido;

	divisores=0;
	numeroIngresado=prompt("ingrseo numero: " );
	numeroIngresado=parseInt(numeroIngresado);


	for (numerorecorrido=numeroIngresado;numerorecorrido>1;numerorecorrido--)
{
	divisores=0;

	for (numeroAnterior=numerorecorrido-1;numeroAnterior>1;numeroAnterior--)
 
 	if (numerorecorrido%numeroAnterior==0)
		{divisores++;
			break;}


	if (divisores==0)
		{console.log("es primo")}

				}
console.log(divisores);

/*	for (numeroAnterior=numeroIngresado-1;numeroAnterior>1;numeroAnterior--)
{
	if (numeroIngresado%numeroAnterior==0)
		{divisores++;
			break;}

	if (divisores==0)
		{console.log("es primo; "+numerorecorrido)}
	else
		{console.log("NO es primo")}


*/
}




/*var resultado;	
var elegido;
var contador;
var primos=0;

elegido=prompt ("Utilizar break en el numero: ");
elegido=parseInt(elegido);

for (contador=1;;)
{

 alert ("el numero es: "+contador )
 
 resultado=contador/elegido; 	
resultado=parseInt(resultado);

resultado2=1/elegido;
resultado2=parseInt(resultado2);

if (resultado==1 && resultado2==elegido)
	{
	document.write("numero divisor: "+contador+"<BR>");
	primos++;}

if (contador==elegido)
		{break;}
contador++;


}

document.write("numeros divisor: "+primos+"<BR>");
}*/