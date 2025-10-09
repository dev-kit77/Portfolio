//init module setup
export { setLights, switchLights }

/**
 * Method to set the light/dark state of the site. sets the HTML attribute and then stores the state
 * @param {boolean} setting boolean value representing true for light, false for dark
 */
function setLights(setting) {
	if (setting) {
		document.documentElement.setAttribute('data-bs-theme', 'light')
		localStorage.setItem('lights', setting)
	}
	else {
		document.documentElement.setAttribute('data-bs-theme', 'dark')
		localStorage.setItem('lights', setting)
	}
}

/**
 * Method to switch the current light/dark state of the site.
 */
function switchLights() {
	if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
		setLights(true)
	}
	else if (document.documentElement.getAttribute('data-bs-theme') == 'light') {
		setLights(false)
	}
}