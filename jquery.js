$(document).ready(function() {
	scrollToAboutMe();
	scrollToProjects();
	scrollToConnect();
	scrollToResources();
	linkToCongo();
})

function scrollToAboutMe() {
	$('#header-aboutMe').on('click', function(event) {
		$('html, body').animate({
    scrollTop: $("#container-two").offset().top
		}, 1000);
	})
}

function scrollToProjects() {
	$('#header-projects').on('click', function(event) {
		$('html, body').animate({
    scrollTop: $("#container-three").offset().top
		}, 1000);
	})
}

function scrollToConnect() {
	$('#header-connect').on('click', function(event) {
		$('html, body').animate({
    scrollTop: $("#container-four").offset().top
		}, 1000);
	})
}

function scrollToResources() {
	$('#header-resources').on('click', function(event) {
		$('html, body').animate({
    scrollTop: $("#container-five").offset().top
		}, 1000);
	})
}

function linkToCongo() {
	$('#container-three .flex-item').on('click', function(event) {
		window.location = $(this).find('a').attr('href');
	})
}
