 // MAP START
function initMap() {
          var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 40.3774315, lng: 49.8541026},
            scrollwheel: false,
            zoom: 17
          });
        }
// MAP END


$(document).ready(function(){
	$(".col-md-6 .input-part").click(function(){
		$("form .col-md-6").removeClass('active1');
		$("form .col-md-12").removeClass('active2');
		$(this).parent().parent().addClass('active1');

	})

	$(".col-md-12 .input-part").click(function(){
		$("form .col-md-6").removeClass('active1');
		$(this).parent().parent().addClass('active2')
	})

	$('.contact-btn-show').click(function(){
			$('.wrap-contact').fadeIn(400);
			$(this).fadeOut()
	})

	$('.contact-btn-hide').click(function(){
		$('.wrap-contact').fadeOut(400);
		$('.contact-btn-show').fadeIn()
	})
})