$(document).ready(function() {
	$.ajax({
			dataType: 'jsonp',
			url: 'https://api.forecast.io/forecast/f044c2cc88a6bb408f9d3092d6a19871/47.4144625,93.3139814?callback=?&units=si'
	})
	.done(function(data) {
		console.log(data);
		$('h1').text(data.currently.temperature); // macht einen Textaufruf, Selektor ist h1 im html. im Objekt data
		$('p').text(data.flags['metno-license']); //da hier ein minus verwendet wird kommen [] drum
		console.log(data);
	});

});