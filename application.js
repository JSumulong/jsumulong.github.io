$(document).ready(function() {
	console.log("top");
	$("#nav").delay(700).fadeIn('1000');
	test();
	console.log("bottom");
});
	
function test() {
	$("#nav").on('click', function(event) {
		$(this).fadeOut('slow');
	});
}