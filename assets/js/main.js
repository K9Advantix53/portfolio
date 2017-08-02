function typeEffect(element, speed) {
	var text = $(element).text();
	$(element).html('');

	var i = 0;
	var timer = setInterval(function() {
		if (i < text.length) {
			$(element).append(text.charAt(i));
			i++;
		} else {
			clearInterval(timer);
		}
	}, speed);
}

$( document ).ready(function() {
  var speed = 100;
  typeEffect($('.loader'), speed);
});

window.onload=function() {
  setTimeout(function() {
    $(".loader-wrapper").addClass('hide').ready(function() {
      $(".wrapper").fadeIn(1500);
    })
  }, 2000)
};

$("#nav-toggle").click(function() {
  $(".nav-wrapper").fadeToggle();
})

$("#projects-button").click(function() {
	$(".nav-wrapper").fadeToggle();
	$('#nav-icon').toggleClass('open');
	$("html, body").animate({
		scrollTop: $("#projects").offset().top
	}, 700)
});

$("#about-button").click(function() {
	$(".nav-wrapper").fadeToggle();
	$('#nav-icon').toggleClass('open');
	$("html, body").animate({
		scrollTop: $("#about-section").offset().top
	}, 700)
});

$('#quote-source').click(function() {
	$("html, body").animate({
		scrollTop: $("#about-section").offset().top
	}, 700)
})

$("#home-button").click(function() {
	$(".nav-wrapper").fadeToggle();
	$('#nav-icon').toggleClass('open');
	$("html, body").animate({
		scrollTop: $("#home").offset().top
	}, 700)
})

$(window).scroll(function() {
		var height = (parseInt($(".parallax").css('height') )*2) - 100
    if ($(window).scrollTop() > height) {
			$('#synapse-panel').fadeIn(700)
    }
});

$(window).scroll(function() {
		var height = (parseInt($(".parallax").css('height') )*3) - 200
    if ($(window).scrollTop() > height) {
			$('#dnd-planner-panel').fadeIn(700)
    }
});

$(window).scroll(function() {
		var height = (parseInt($(".parallax").css('height') )*4) - 200
    if ($(window).scrollTop() > height) {
			$('#color-coder-panel').fadeIn(700)
    }
});

// about page slideshow

$('#basics-button').click(function() {
	var basicsStatus=$('.basics-panel').css('display');
	var techStatus=$('.tech-stack-panel').css('display');
	var extraStatus=$('.extra-panel').css('display');
	if (basicsStatus=='none' && techStatus=='none' && extraStatus=='block') {
		$('.extra-panel').fadeOut(500);
		$('.basics-panel').fadeIn(500);
	} else if (basicsStatus=='none' && techStatus=='block' && extraStatus=='none') {
		$('.tech-stack-panel').fadeOut(500);
		$('.basics-panel').fadeIn(500);
	}
})

$('#tech-button').click(function() {
	var basicsStatus=$('.basics-panel').css('display');
	var techStatus=$('.tech-stack-panel').css('display');
	var extraStatus=$('.extra-panel').css('display');
	if (basicsStatus=='none' && techStatus=='none' && extraStatus=='block') {
		$('.extra-panel').fadeOut(500);
		$('.tech-stack-panel').fadeIn(500);
	} else if (basicsStatus=='block' && techStatus=='none' && extraStatus=='none') {
		$('.basics-panel').fadeOut(500);
		$('.tech-stack-panel').fadeIn(500);
	}
})

$('#extra-button').click(function() {
	var basicsStatus=$('.basics-panel').css('display');
	var techStatus=$('.tech-stack-panel').css('display');
	var extraStatus=$('.extra-panel').css('display');
	if (basicsStatus=='block' && techStatus=='none' && extraStatus=='none') {
		$('.basics-panel').fadeOut(500);
		$('.extra-panel').fadeIn(500);
	} else if (basicsStatus=='none' && techStatus=='block' && extraStatus=='none') {
		$('.tech-stack-panel').fadeOut(500);
		$('.extra-panel').fadeIn(500);
	}
})
