$(document).ready(function() {
	$("#construction").delay(700).fadeIn('1000');
	test();
	aboutMe();
	projects();
});
	
function test() {
	$("#construction").on('click', function(event) {
		$(this).fadeOut('slow');
	});
}

function aboutMe() {
	$("#about-me-heading").on('click', function(event) {
		$('#about-me-tab').toggle();
	})
}

function projects() {
	$("#projects-heading").on('click', function(event) {
		$("#projects-tab").toggle();
	})
}