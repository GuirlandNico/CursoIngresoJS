
/* 
jose m 25
maria f 16
jesus m 33
fer f  81
*/
function mostrar()
{	var contador=0;
	var nombre;
	var sexo; var cantMujeres=0; var cantHombres=0;
	var edad;
	var mayores=0;
	var menores=0;

	  while (contador<4)
	{
	contador++;
	nombre=prompt("ingrese nombre: ");

	sexo=prompt("ingrese sexo: ");
	while (sexo!="m" && sexo!="f")
	{
		sexo=prompt("ingrese sexo valido:")

	}
	edad=prompt("ingrese edad: ")
	edad=parseInt(edad);
	while (isNaN(edad)||edad<0||edad>100)
{
	edad=prompt("ingrese edad: ")
	edad=parseInt(edad);
}

if (sexo=="f")
		{
		cantMujeres++;
		}
else
		{ cantHombres++;
	 	}

if (edad>18)
		{
		mayores++;
		}
else
		{ menores++;
	 	}


}


document.write("cantMujeres:"+cantMujeres+ "<BR>");

document.write("cantHombres:"+cantHombres+ "<BR>");

document.write("mayores:"+mayores+ "<BR>")

document.write("menores:"+menores+ "<BR>")


}
