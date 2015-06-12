$(document).ready(function() {
	navigator.geolocation.getCurrentPosition(function(position) {
		//console.log(position);

		var koordinaten= {
			longitude: position.coords.longitude,
			latitude: position.coords.latitude
		};


		// $('.longitude').text(position.coords.longitude);
		// $('.latitude').text(position.coords.latitude);
		// $('.accuracy').text(position.coords.accuracy);

		$.ajax({
			url: 'https://api.forecast.io/forecast/f044c2cc88a6bb408f9d3092d6a19871/' + koordinaten.latitude + ',' + koordinaten.longitude,
			data: {

				units:'si',
				lang: 'de'
			},
			dataType: 'jsonp'
		}).done (function(data) {
			console.log(data);
			$('.temp').text(data.currently.temperature+ '°C');

			//google geocoding
			$.ajax({
				url:'https://maps.googleapis.com/maps/api/geocode/json',
				data: {
					latlng: koordinaten.latitude + ',' + koordinaten.longitude,
					key: 'AIzaSyDgYh-UffzCV54XCcReML4WSqyb0_zv8x8',
					language: 'de'
				}
			}).done (function(data){
				console.log(data);
				$('.address').text(data.results[0].formatted_address);
			});
		});
	});
});