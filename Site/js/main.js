$(document).ready(function() {

	$('.drink_tab').on('click', function(event) {
		event.preventDefault();
		$('#food').slideUp('slow');
		$('#drink').slideDown('slow');
	});
});