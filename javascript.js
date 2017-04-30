const resume = document.querySelector('.resume-selector');
const vacationer = document.querySelector('.vacationer-selector');
const congo = document.querySelector('.congo-selector');
const remindr = document.querySelector('.remindr-selector');

function toggleProjectsOff() {
	let projectDisplays = document.querySelectorAll('.project-display-wrapper');
	projectDisplays.forEach(project => project.classList.remove('active'));
}

function toggleResumeProject() {
	var resumeDisplay = document.querySelector('.resume-display');
	toggleProjectsOff();
	resumeDisplay.classList.add('active');
}

function toggleVacationerProject() {
	var vacationerDisplay = document.querySelector('.vacationer-display');
	toggleProjectsOff();
	vacationerDisplay.classList.add('active');
}

function toggleCongoProject() {
	var congoDisplay = document.querySelector('.congo-display');
	toggleProjectsOff();
	congoDisplay.classList.add('active');
}

function toggleRemindrProject() {
	var remindrDisplay = document.querySelector('.remindr-display');
	toggleProjectsOff();
	remindrDisplay.classList.add('active');
}

resume.addEventListener('click', toggleResumeProject);
vacationer.addEventListener('click', toggleVacationerProject);
congo.addEventListener('click', toggleCongoProject);
remindr.addEventListener('click', toggleRemindrProject);
