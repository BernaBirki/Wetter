$(document).ready(function() {
		navigator.geolocation.getCurrentPosition(function(position) {
			console.log(position);

			$('.position').text(position.coords.position);
			$('.longitude').text(position.coords.longitude);
			$('.latitude').text(position.coords.latitude);
			$('.accuracy').text(position.coords.accuracy);

	});

});