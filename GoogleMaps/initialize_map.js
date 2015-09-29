var myCenter = new google.maps.LatLng(52.229824,21.011753);
var map
// niezbędne elementy do wyznaczenia trasy:
var trasa  		 = new google.maps.DirectionsService();
var trasa_render = new google.maps.DirectionsRenderer();


function initialize_map() {
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

	//var marker = new google.maps.Marker({
	//	position:myCenter,
	//	title:'Click to zoom'
	//});
	//marker.setMap(map);

	//var infowindow = new google.maps.InfoWindow({
	//	content:'Hello World!' + '<br>' + '<img src="image.png" alt="" style="width:auto;height:100px;">'
	//});
	//google.maps.event.addListener(marker, 'click' , function() {
	//	infowindow.open(map, marker);
	//});
	//google.maps.event.addListener(map, 'click' , function() {
	//	infowindow.close(map, marker);
	//});

	// ustawienie docelowej mapy i kontenera na wskazówki
	trasa_render.setMap(map);
	trasa_render.setPanel(document.getElementById('wskazowki'));

	//var myCity = new google.maps.Circle({
	//	center:myCenter,
	//	radius:1000,
	//	strokeColor:"#0000FF",
	//	strokeOpacity:0.3,
	//	strokeWeight:2,
	//	fillColor:"#C2F0FF",
	//	fillOpacity:0.4
	//	});
	//myCity.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize_map);
