// new WOW().init();
var temp_pos = 0;


$(document).ready(function(){
	jQuery(".item a").click(function(event){
		event.preventDefault();
		var attr = jQuery(this).attr("data-location");
		jQuery.get(attr, function(data, status){
			jQuery("#overlay_inner_2").html(data);
			jQuery("#overlay").fadeIn(400);
			temp_pos = $(window).scrollTop();
			$(window).delay(500).scrollTop('0px');
		});
	});
	jQuery("#overlay").click(function(event){
		jQuery(this).hide(400);
		$(window).scrollTop(temp_pos);
	});
	$(window).scroll(function(){
		var y = $(window).scrollTop() * 0.6;
		// if (y <= 60){
		// 	y = 60;
		// }
		$(".jumbotron").css({"top": y + "px"});

		if ( $(window).scrollTop() > 10){y 
			$(".jumbotron").addClass("opacified");
			$('.midsection.desktop').css({'box-shadow': '0px -3px 10px 0px white'});
		}
		else{
			$(".jumbotron").removeClass("opacified");
			$('.midsection.desktop').css({'box-shadow': '0px 0px 0px 0px white'});
		}

		if ( $(window).scrollTop() > 380){
			$(".midsection.web .items").fadeIn(1500);
			$("footer").fadeIn();
		}
		else{
			$(".midsection.web .items").fadeOut();
			$("footer").fadeOut();
		}
	});
});
