function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	

while (contador<5)
	{
		console.log ("numero"+contador);
		contador++;


	numero=prompt("ingrese el número: ");
	numero = parseInt(numero);

	acumulador=acumulador+numero;

	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN