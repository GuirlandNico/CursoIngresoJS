
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho = prompt("Ingrese el ancho: ");
	ancho = parseInt (ancho);
	largo = prompt ("ingrese el largo: ");
	largo = parseInt (largo); 
	perimetro= (ancho+largo)*2;

	alert ("el perimetro es: "+perimetro);


}
