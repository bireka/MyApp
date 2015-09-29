//document.getElementById("go-btn").addEventListener("click", znajdz_wskazowki);

function znajdz_wskazowki()
{
	alert ("Dojazd")

	var dane_trasy = 
	{
		origin: 'Warszawa',
		destination: 'Piaseczno',
		travelMode: google.maps.DirectionsTravelMode.WALKING
	};
	
	trasa.route(dane_trasy, obsluga_wskazowek);

	alert ("Dojazd!!!!!!!!!!!!!")
}


function obsluga_wskazowek(wynik, status)
{
	alert ("obsluga wskazowek")
	if(status != google.maps.DirectionsStatus.OK || !wynik.routes[0])
	{
		alert('Wystąpił błąd!');
		return;
	}
	
	trasa_render.setDirections();
}


