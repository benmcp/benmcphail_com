pageNumber = 1;
aboutPage = 1;
$("#mainAbout").click(function(){
	$('html,body').animate({
		scrollTop: $("#aboutSection").offset().top
	},1000);
})
$("#mainResources").click(function(){
	$('html,body').animate({
		scrollTop: $("#resourceSection").offset().top - 100
	},1000);
})
$("#headWho").click(function(){
	if(aboutPage == 2){
		$("#aboutMission").fadeOut('slow')
		$("#aboutWe").fadeIn('slow')
	}
	if(aboutPage == 3){
		$("#aboutCall").fadeOut('slow')
		$("#aboutWe").fadeIn('slow')
	}
	aboutPage = 1;
})
$("#headMission").click(function(){
	if(aboutPage == 1){
	//	$("#aboutWe").css('display','none')
		
		$("#aboutWe").fadeOut('slow')
		$("#aboutMission").fadeIn('slow')
	}
	if(aboutPage == 3){
		$("#aboutCall").fadeOut('slow')
		$("#aboutMission").fadeIn('slow')
	}
	aboutPage = 2;

})
$("#headCall").click(function(){
	if(aboutPage == 1){
		$("#aboutWe").fadeOut('slow')
		$("#aboutCall").fadeIn('slow')
	}
	if(aboutPage == 2){
		$("#aboutMission").fadeOut('slow')
		$("#aboutCall").fadeIn('slow')
	}
	aboutPage = 3;
	
})


$(document).ready(function() {
	
	mainHeight = $(window).height() - 100
	
	$("#mainStrip").css('height',mainHeight);
	
	if (pageNumber == 1){
	//	$("#mainLogo").css('border-bottom','5px solid #7D4796')
	}

	
	
});
