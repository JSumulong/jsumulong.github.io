$(document).ready(function() {
	console.log("top");
	$("#construction").delay(700).fadeIn('1000');
	test();
	console.log("bottom");
});
	
function test() {
	$("#construction").on('click', function(event) {
		$(this).fadeOut('slow');
	});
}