
function mostrar()
{	var base;
	var altura;
	var perimetro;
	var superficie;

	base=prompt("ingrese la base del triangulo: ");
	base=parseInt(base);
	altura=prompt("ingrese la altura del triangulo: ");
	altura=parseInt(altura);

	superficie=base*altura/2;
	superficie=parseInt(superficie);

	perimetro=altura*3;
	perimetro=parseInt(perimetro);

	alert ("la superficie del triangulo es: "+superficie+" y el perimetro es: "+perimetro )

}
