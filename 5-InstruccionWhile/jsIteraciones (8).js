function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';

while (respuesta=="si")
	{

	numero=prompt("ingrese el número: ");
	numero = parseInt(numero);
	


		if (numero<0)
		{
   		 negativo=negativo*numero;

		}
		else 
		{
			positivo=positivo+numero;

		}
	

	respuesta= prompt("continuar: ");
	contador++;


	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN