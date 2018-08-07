function mostrar()
{

	var nota;
	var mensaje=0;
	
	nota=prompt("ingrese la nota: ");

	switch(nota)
	{	
		case 0:
		case 1:
		case 2:
		case 3: 
			mensaje="la próxima se puede"
			break;
		case 4:
		case 5:
		case 6:
			mensaje="raspando"
			break;
		case 7:
		case 8:
		case 9:
		case 10:
			mensaje="aprobo"
			break;
		

}

alert(mensaje);

	
	if (nota>8 && mensaje=="aprobo")
	 {	alert("muy bien");	}



	if (nota<5 && mensaje=="raspando")
	 {	alert("Debes preocuparte mas");	}


	
}
