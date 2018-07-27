function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var respuesta='si' ;


while (respuesta=="si")
	{


	
	numero=prompt("ingrese el número: ");
	numero = parseInt(numero);

	acumulador=acumulador+numero;

respuesta= prompt("continuar: ");
contador++;


	}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN