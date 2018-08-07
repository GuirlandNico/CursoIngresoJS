
function mostrar()
{
	var dia;
	var mensaje="error";
	var 

	dia=prompt("Dia de la semana: ");

	switch(dia)
	{	
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
			mensaje="a trabajar";
			break;
		case "sabado":
		case "domingo":
			mensaje="buen finde";
			break;

	}

alert(mensaje);

}
