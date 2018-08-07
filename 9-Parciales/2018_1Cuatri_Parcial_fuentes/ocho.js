function mostrar()
{
	var letra; var numero; var contador=0;
	var resto;
	var pares=0; var impares=0; var ceros=0;
	var acumulador=0; var promedio; var sumaN=0;
	var maximoN=0; var letraMaximo;
	var minimoN=0; var letraMinimo;

	while (contador<6)
{	contador++;	

	numero=prompt("ingrese numero: ");
	numero=parseInt(numero);

	while(numero<-100 || numero>100)
	{
		numero=prompt("ingrese numero valido: ");
	}

	letra=prompt("ingrese letra: ");

	resto=numero%2;
	resto=parseInt(resto);

	if (resto==0 && numero>0)
	{

		acumulador=acumulador+numero;
		acumulador=parseInt(acumulador);
		pares++;
	}
	else 
		{
			sumaN=sumaN+numero;
			sumaN=parseInt(sumaN);
			impares++;}

	if (numero==0)
		{ ceros++;}

	if (numero<minimoN)
		{minimoN=numero;
			letraMinimo=letra}
	if (numero>maximoN)
		{maximoN=numero;
			letraMaximo=letra}






}

promedio=acumulador/pares;
promedio=parseInt(promedio);


document.write("la suma de los negativos es: "+sumaN+"<BR>");
document.write("el promedio de los positivos es: "+promedio+"<BR>");
document.write("la cantidad de pares es: "+pares+"<BR>");
document.write("la cantidad de ceros es: "+ceros+"<BR>");
document.write("la letra del numero minimo es "+letraMinimo+" y el numero es "+minimoN+"<BR>");
document.write("la letra del numero minimo es "+letraMaximo+" y el numero es "+maximoN+"<BR>");
document.write("la cantidad de impares es: "+impares);


}


