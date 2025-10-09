//import dark mode set
import { setLights } from './javasc/darkToggle.js'

//point of entry
$(function () {
	//load and inject header
	$("#header").load("header.html", function () {
		//load and inject footer
		$("#footer").load("footer.html", 
			//call main
			main())
	})
})

//main js stem following page load
function main() {
	//get stored light/dark state
	let lights = localStorage.getItem('lights')
	
	//parce state
	if (lights === 'false') {
		setLights(false)
	}
	else if (lights === 'true') {
		setLights(true)
	}
	//default fallbacks
	else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		setLights(false)
	}
	else {
		setLights(true)
	}	
}

