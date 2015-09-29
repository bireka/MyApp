document.getElementById("search-btn").addEventListener("click", displayName);

var geokoder = new google.maps.Geocoder();
//var wskaznik = new google.maps.Marker({icon: ikona, shadow: cien});
var marker = new google.maps.Marker({});



function displayName() {
	var location = document.getElementById("location").value
    var name     = document.getElementById("name").value
	var street   = document.getElementById("street").value
	var distance = document.getElementById("distance").value

	skoczDoAdresu(location)
}


function skoczDoAdresu(adres)
{
	marker.setMap(null); // ukrywamy marker
	geokoder.geocode({address: adres}, function(wyniki, status)
		{
			if(status == google.maps.GeocoderStatus.OK)
			{
				map.setCenter(wyniki[0].geometry.location);
				marker.setPosition(wyniki[0].geometry.location);
				marker.setMap(map); // pokazujemy go ponownie
				//dymek.open(mapa, wskaznik); // dymek ze znalezionym adresem
				//dymek.setContent('<strong>Poszukiwany adres</strong><br />'+adres);
			}
			else
			{
				alert("Nie znalazłem podanego adresu!");
			}
		});
}
