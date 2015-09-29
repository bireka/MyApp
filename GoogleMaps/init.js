var map; // obiekt globalny

// niezbędne elementy do wyznaczenia trasy:
var trasa  		 = new google.maps.DirectionsService();
var trasa_render = new google.maps.DirectionsRenderer();
var myCenter = new google.maps.LatLng(52.229824,21.011753);

function initialize_map()  
{  
	var mapProp = {
		center:myCenter,
		zoom:15,
		panControl:true,
		zoomControl:true,
		mapTypeControl:true,
		scaleControl:true,
		streetViewControl:true,
		overviewMapControl:true,
		rotateControl:true,    
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};

	map = new google.maps.Map(document.getElementById("googleMap"), mapProp); 			

	// ustawienie docelowej mapy i kontenera na wskazówki
	trasa_render.setMap(map);
	trasa_render.setPanel(document.getElementById('wskazowki'));
}  

google.maps.event.addDomListener(window, 'load', initialize_map);
