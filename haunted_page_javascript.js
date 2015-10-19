$(document).ready(function() {
	alert('Boo!');
	$('button').click(function() {
		$('h1').hide();
	});
	$('h5').click(function() {
		$('h5').fadeOut(1000);
	});
	$('img').animate( {
		width: "10%",
		height: "10%"
	}, 3000);
	$('img').animate( {
		width: "100%",
		height: "100%"
	}, 3000);
	})
