$(document).ready(function() {
	
	function heightDetect() {
		$(".main_head").css("min-height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	
	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});
	$(".title_section").animated("fadeInLeft", "fadeOutLeft");
	$(".content_us").animated("fadeInRight", "fadeOutRight");
	$(".anim_tada").animated("tada", "fadeOutUp");
	$(".animation_1").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_2").animated("fadeInDown", "fadeOutUp");
	$(".animation_3").animated("fadeInRight", "fadeOutRight");
	$(".tech_wrapp").animated("zoomIn", "zoomOut");
	
});
$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(1000).fadeOut("slow");

	// $(".top_text h1").animated("fadeInDown", "fadeOutUp");
	// $(".top_text p").animated("fadeInUp", "fadeOutDown");

}); 