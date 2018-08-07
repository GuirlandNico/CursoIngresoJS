function mostrar()
{
	var precio;
	var porcentaje;
	var descuento;
	var precioDescuento;
	var iva;
	var precioFinal;

	precio=prompt("precio inicial: ");
	precio=parseInt(precio);
	porcentaje=prompt("porcentaje del descuento: ");
	porcentaje=parseInt(porcentaje);

	descuento=precio*porcentaje/100;
	descuento=parseInt(descuento);
	

	precioDescuento=precio-descuento;
	precioDescuento=parseInt(precioDescuento);
	

	iva=precio*0.21;
	iva=parseInt(iva);
	alert("el descuento seria de "+descuento+" , el precio con descuento es de "+precioDescuento +" y el iva es de "+iva);

	precioFinal=precioDescuento+iva;

	document.getElementById('elPrecioFinal').value=precioFinal;

}
