function ToggleActive() {
	this.classList.toggle('flex-active');
}

const flexItems = document.querySelectorAll('.flex');

flexItems.forEach(function(item) {
	item.addEventListener('click', ToggleActive);
})