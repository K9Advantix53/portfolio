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
	if ($("#nav-toggle").css('color') == 'rgb(255, 255, 255)') {
		$("#nav-toggle").css({ 'color': 'black' })
	} else {
		$("#nav-toggle").css({ 'color': 'white' })
	}
})

$("#projects-button").click(function() {
	$(".nav-wrapper").fadeToggle();
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 700);
});
