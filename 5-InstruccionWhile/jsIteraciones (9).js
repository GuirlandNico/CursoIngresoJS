function mostrar()
{
	
	// declarar variables
	
	var respuesta='si';
	var numero;
	
	var maximo=0;
	var minimo=0;
		var contador=0;

	while(respuesta=="si")
	{
		contador++;
	 numero= prompt ("ingrese el numero: #"+contador)
	 numero= parseInt (numero);

	 if (contador==1)
	{
		numero=maximo
		numero=minimo
	} 	
			
	 	else{
			 if (numero>maximo)
			 { maximo=numero;

			 }

			 if (numero<minimo)

			 { minimo=numero;

			 }
			  }
	respuesta= prompt("continuar: ");
	
	

	}
	document.getElementById('minimo').value=minimo;
	document.getElementById('maximo').value=maximo;





}//FIN DE LA FUNCIÓN