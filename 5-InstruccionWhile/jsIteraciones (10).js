function mostrar()
{	/*

	var contador=0;
	//declarar contadores y variables 
	var positivo=0; 
	var negativo=0;
	var acumP=0;
	var acumN=0;
	var ceros=0;
	var numero;
	var promedioN;
	var promedioP;
	var diferencia;
	var respuesta="si";
	var pares;

	while(respuesta!="no") 
	{
		numero=parseInt(numero);
	
		while(isNaN(numero))
	{numero=prompt("ingrese numero"+numero);
	numero=parseInt(numero);}
	{
 	   contador++;
	 numero= prompt ("ingrese el numero: #"+contador)
	 numero= parseInt (numero);


	 	if(numero%2==0)
	 	{
	 			pares++;
	 	}

	 	if (numero>0)
	 		 { numero=positivo;
	 		 	acumP+=numero;
	 		 	promedioP=acumP/positivo;

	 		 	positivo++; }

	 		else {
	 	if
	 		(numero<0)
	 		{
	 			numero=negativo;
	 			acumN+=numero;
	 			promedioN=acumN/negativo;
	 			negativo++;
	 		          }
			  
	 
		else (numero=0)

			 { numero=0;
			numero=ceros;
				ceros++;}

	 		      }


	respuesta= prompt("continuar: ");


	}

	}//end while


	document.write("numeros positivos: "+positivo+"<BR>");
	document.write("numeros negativos: "+negativo+"<BR>");
	document.write("ceros: "+ceros+"<BR>");
	document.write("suma de los positivos: "+acumP+"<BR>");
	document.write("suma de los negativos: "+acumN+"<BR>");

	}



//FIN DE LA FUNCIÓN