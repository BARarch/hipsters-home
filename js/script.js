/* Script.js */

$(document).ready(function() {
	// navigation click actions	
	$('.scroll-link').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});
	// scroll to top action
	$('.scroll-top').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop:0}, 'slow'); 		
	});
	// mobile nav toggle
	$('#navbar-collapsed').on('click', function (event) {
		event.preventDefault();
		$('#navbar-collapse').toggleClass("open");
	});
	
	//ScrollSpy Patch
	/*
	$('body').on('activate.bs.scrollspy', function () {
  		var elm = document.getElementsByClassName("active")[0].getElementsByTagName("A")[0].getAttribute("data-id");
  		alert("Scrollspy has fired on " + elm);
    	
	});
	*/
	
});
// scroll function
function scrollToID(id, speed){
	var offSet = 50;
	var targetOffset = $(id).offset().top - offSet;
	var mainNav = $('#navbar-collapse');
	$('html,body').animate({scrollTop:targetOffset}, speed);
	if (mainNav.hasClass("open")) {
		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		mainNav.removeClass("open");
	}
}
if (typeof console === "undefined") {
    console = {
        log: function() { }
    };
    
}

