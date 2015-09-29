function znajdz_wskazowki()
	{
		var dane_trasy = 
		{
			origin: 'Warszawa',
			destination: 'Piaseczno',
			travelMode: google.maps.DirectionsTravelMode.DRIVING
		};
	
		trasa.route(dane_trasy, obsluga_wskazowek);
	}

	function obsluga_wskazowek(wynik, status)
	{
		if(status != google.maps.DirectionsStatus.OK || !wynik.routes[0])
		{
			alert('Wystąpił błąd!');
			return;
		}
	
		trasa_render.setDirections(wynik);
	}

document.getElementById("go-btn").addEventListener("click", znajdz_wskazowki);
