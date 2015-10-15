$(document).ready(function() {
	alert('Boo!');
	})

$(document).ready(function() {
	$('button').click(function() {
		$('h1').hide();
	});
})

$(document).ready(function() {
	$('h5').click(function() {
		$('h5').fadeOut(1000);
	});
})

$(document).ready(function() {
	$('img').animate( {
		width: "10%",
		height: "10%"
	}, 3000);
})

$(document).ready(function() {
	$('img').animate( {
		width: "100%",
		height: "100%"
	}, 3000);
})
