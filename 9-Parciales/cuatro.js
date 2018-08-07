function mostrar()
{
	var numero1;
	var numero2;
	var division;
	var suma;

	numero1=prompt("primer numero: ");
	numero1=parseInt(numero1);
	numero2=prompt("segundo numero: ");
	numero2=parseInt(numero2);

	if (numero1==numero2)
	{	alert(numero1+"-"+numero2); 	}

	if (numero1>numero2)
	{	
		division=numero1/numero2;
		division=parseInt(division);
		alert("la division es: "+division); 	}

	if (numero1<numero2)
	{	
		suma=numero1+numero2;
		suma=parseInt(suma);
		alert("la suma es: "+suma); 	}

	if (suma<50)
	{	
		alert("la suma es "+suma+" y es menor a 50"); 	}



}
