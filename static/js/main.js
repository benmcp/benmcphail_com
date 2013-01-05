$(document).ready(function(){
	
	winHeight = $(window).height();
	if(winHeight > 600){
		$("#main_name").height(winHeight)

	}
	if(winHeight > 750){
		$("#main_skills").height(winHeight)
	}

})


function theURL(){
	url = window.location.pathname;
	url = url.split("/")
	len = url.length - 2
	url = url[len]
	
	
	
	return url
}

function scroll_top(){
	// get url
	theURL()
	if (theURL() == "fun"){
		url = "http://www.benmcphail.com/"
		window.location = url
	
	}
	else{
		$('html,body').animate({
			scrollTop: $("#main_name").offset().top
		},1500);
	}
	
	
}
function scroll_skills(){
	theURL()
	if (theURL() == "fun"){
		url = "http://www.benmcphail.com/#main_skills"
		window.location = url
	}
	else{
		$('html,body').animate({
			scrollTop: $("#main_skills").offset().top
		},1000);
	}
}
function scroll_projects(){
	theURL()
	if (theURL() == "fun"){
		url = "http://www.benmcphail.com/#main_projects"
		window.location = url
	}
	else{
		$('html,body').animate({
			scrollTop: $("#main_projects").offset().top
		},1000);
	}
}
function scroll_connect(){
	theURL()
	if (theURL() == "fun"){
		url = "http://www.benmcphail.com/#main_connect"
		window.location = url
	}
	else{
		$('html,body').animate({
			scrollTop: $("#main_connect").offset().top
		},2000);
	}
}