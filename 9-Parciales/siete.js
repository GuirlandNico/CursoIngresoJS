function mostrar()
{
	var nota; var acumulador=0;
	 var promedio;
	var edad;
	var sexo;
	var contador=0;
	var mayores;

while (contador>5);
{
	

	nota=prompt("ingrese nota: ");
	nota=parseInt(nota);

	while(nota>=0 || nota<=10 )
	{
		acumulador=acumulador+nota;
	

	}


	edad=prompt("ingrese la edad: ");
	edad=parseInt(edad);

	sexo=prompt("ingrese el sexo: ");
	while (sexo=="m" || sexo=="f")
 	{ 


 	}




	if (edad>18 && sexo=="m" && nota>=6 )
	 {	mayores++;	}



	

	





	contador++;
	}
	promedio=acumulador/5;
	promedio=parseInt(promedio);
	alert("El promedio de las notas es: "+promedio);



}
