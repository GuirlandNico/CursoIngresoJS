function mostrar()
{
var planeta;
var mensaje="no es un planeta valido";

planeta=prompt("ingrese el planeta: ");

switch  (planeta)
{ case "tierra":
	{	mensaje="aca vivimos"
	break;
	}
	case "mercurio":
	{	mensaje="acá hace más calor"
	break;
	}
	case "venus":
	{	mensaje="acá hace más calor"
	break;
	}
	case "marte":
	{	mensaje="acá hace más frio"
	break;
	}
	case "jupiter":
	{	mensaje="acá hace más frio"
	break;
	}
	case "saturno":
	{	mensaje="acá hace más frio"
	break;
	}
	case "urano":
	{	mensaje="acá hace más frio"
	break;
	}
	case "neptuno":
	{	mensaje="acá hace más frio"
	break;
	}



}

alert(planeta+" , "+mensaje);

}
