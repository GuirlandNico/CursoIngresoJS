function mostrar()
{ 	var numero1;
	var numero2;
	var suma;
	var resta;

	numero1=prompt ("ingrese primer numero: ");
	numero1=parseInt(numero1);
	numero2=prompt ("ingrese segundo numero: ");
	numero2=parseInt(numero2);

	
	if (numero1==numero2)
	{
		alert ("los numeros son: "+numero1+"+"+numero2);


	}
	if (numero1>numero2)
	{
		resta=numero1-numero2;
		resta=parseInt(resta);
		alert("la resta de los numeros es: "+resta);
	}
	if (numero2>numero1)
	{
		suma=numero2+numero1;
		suma=parseInt(suma);

		alert("la suma de los numeros es: "+suma);
	}
	if (suma>10)
	{
		alert("el resultado de la suma es: "+suma+" y supero el 10");

	}

}
