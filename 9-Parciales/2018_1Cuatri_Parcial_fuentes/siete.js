

function mostrar()
{
	var contador=0;
	var nota; var promedio;
	var sexo;
	var acumulador=0;
	var varones=0;
	var notaBaja=10; var sexoBajo;

	while (contador<5)
{	
	contador++;

	nota=prompt("ingrese nota del alumno: ");
	nota=parseInt(nota);
	while(nota<0 || nota>10)
	{	nota=prompt("ingrese nota valida: ");	}

	acumulador=acumulador+nota;


	sexo=prompt("ingrese el sexo de la persona: ");
	while (sexo!="m" && sexo!="f")
	{
		sexo=prompt("ingrese sexo valido:")	}

	if (nota>=6 && sexo=="m")
		{	varones++;	}

	if (nota<notaBaja)
		{	notaBaja=nota;
			sexoBajo=sexo;	}


}

	
	promedio=acumulador/5;
	promedio=parseInt(promedio);
	alert("el promedio de las notas es: "+promedio);
	alert("varones con nota mayor o igual a 6 es: "+varones);
	alert("la nota mas baja es "+notaBaja+" y el sexo de la persona es "+sexoBajo);



}