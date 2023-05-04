(function( $ ) {
	'use strict';

	/**
	 * All of the code for your public-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */

	/* Button count saved localstorage */
	
	window.addEventListener("DOMContentLoaded", (event) => {
		let loadcount = localStorage.getItem('clickCount');
		if (localStorage.getItem("clickCount") === null) {
		  $('.loadCount').text(0);
		}
		else{
			$('.loadCount').text(loadcount);
		}

		let button = document.getElementById("cta_btn");
	      let clickCount = 0;
	      let display = document.getElementById("click-count");

	      if (localStorage.getItem("clickCount")) {
	         clickCount = parseInt(localStorage.getItem("clickCount"));
	      }
	      if (button) {
		      button.addEventListener("click", function() {
		         clickCount++;
		         display.innerHTML = "Button clicked: " +  clickCount + " times";
		         localStorage.setItem("clickCount", clickCount);
		      });
	  	 }
  	 });
	
})( jQuery );
