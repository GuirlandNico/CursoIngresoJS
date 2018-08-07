function mostrar()
{
var  letra;
var numero;
var respuesta;
var resto;
var contador=0;
var pares=0;
var impares=0;
var ceros=0;
var sumaP;var promedio;
var sumaN;

while (contador<10)
{
	respuesta=prompt("quiere seguir: ");
	if (respuesta=="si")
		{
		numero=prompt("ingrese el numero:");
		numero=parseInt(numero);

		letra=prompt("ingrese la letra: ");
		
		if (numero>-100 && numero<100)
		{ 
				resto=numero%2;
				resto=parseInt(resto);
			if (resto==0)
				{pares++;}
			else 
				{impares++;}

			if (numero==0)
				{ceros++;}


			if (numero>0)
			{
			sumaP=sumaP+numero;
			promedio=sumaP/contador;

			}
			else 
				{
					sumaN=sumaN+numero;}





		}

		}

	else 
	{break;}
}

document.write("la suma de los negativos es: "+sumaN+"<BR>");
document.write("el promedio de los positivos es: "+promedio+"<BR>");
document.write("la cantidad de pares es: "+pares+"<BR>");
document.write("la cantidad de impares es: "+impares);


}
