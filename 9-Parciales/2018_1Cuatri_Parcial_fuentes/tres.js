function mostrar()
{
	var precio;
	var porcentaje;
	var descuento;
	var precioF;


	precio = prompt ("el precio es: ");
	precio = parseInt (precio);
	porcentaje = prompt ("El porcentaje es: " );
	porcentaje = parseInt (porcentaje);

	descuento=precio*porcentaje/100;
	precioF=precio-descuento;

	document.getElementById('elPrecioFinal').value=precioF;


}
