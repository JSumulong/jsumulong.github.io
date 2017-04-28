const resume = document.querySelector('.resume-selector');
function toggleResumeProject() {
	var resumeDisplay = document.querySelector('.resume-display');
	if (document.querySelector('.resume-display.active')) {
		resumeDisplay.classList.remove('active');
	} else {
		resumeDisplay.classList.add('active');
	}
}
resume.addEventListener('click', toggleResumeProject);