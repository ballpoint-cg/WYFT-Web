
(function($) {
    $WIN = $(window);	
    /* Preloader 
	 * -------------------------------------------------- */
	var ssPreloader = function() {

		$WIN.on('load', function() {	

			// force page scroll position to top at page refresh
			$('html, body').animate({ scrollTop: 0 }, 'normal');

         // will fade out the whole preloader DIV that covers the website.
	      $("#preloader").delay(500).fadeOut('slow');
	  
	  	});
	};


	/* Mobile Menu
	 * ---------------------------------------------------- */ 
	var ssMobileMenu = function() {

  		var toggleButton = $('.header-menu-toggle'),
          nav = $('#header-nav-wrap');

		toggleButton.on('click', function(event){
			event.preventDefault();

			toggleButton.toggleClass('is-clicked');
			nav.slideToggle();
		});

		if (toggleButton.is(':visible')) nav.addClass('mobile');

		$(window).resize(function() {
			if (toggleButton.is(':visible')) nav.addClass('mobile');
			else nav.removeClass('mobile');
		});

		$('#header-nav-wrap').find('a').on("click", function() {  

			if (nav.hasClass('mobile')) {   		
				toggleButton.toggleClass('is-clicked'); 
				nav.slideToggle();   		
			}     
		});

	}; 
  /* Back to Top
	* ------------------------------------------------------ */
	var ssBackToTop = function() {

		var pxShow  = 500,         // height on which the button will show
		fadeInTime  = 400,         // how slow/fast you want the button to show
		fadeOutTime = 400,         // how slow/fast you want the button to hide
		scrollSpeed = 300,         // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'
		goTopButton = $("#go-top")

		// Show or hide the sticky footer button
		$(window).on('scroll', function() {
			if ($(window).scrollTop() >= pxShow) {
				goTopButton.fadeIn(fadeInTime);
			} else {
				goTopButton.fadeOut(fadeOutTime);
			}
		});
    };	
      /* Animate On Scroll
  	* ------------------------------------------------------ */
	var ssAOS = function() {

		AOS.init( {
      	offset: 200,
      	duration: 600,
      	easing: 'ease-in-sine',
      	delay: 300,
			once: true,
			disable: 'mobile'
    	});

	};
    (function ssInit() {
		ssPreloader();
		ssMobileMenu();
        ssBackToTop();
        ssAOS();
	})();
 

})(jQuery);

$( document ).ready(function() {
	function heightEqualizer() {
		let maxheight = 0;

        $('.team-row').each(function () {
            let first = $(this).children().first();
            let second = $(this).children().eq(1);
            
            let h1 = first.outerHeight( true);
            let h2 = second.outerHeight( true);
            if (second.find('img').length)
                second.height(h1);
            else
                first.height(h2);
            
            if($(window).innerWidth() < 600) {
                first.css('height','100%');
                second.css('height','100%');
            }
        });

        
	}
	
	// Fire.
	heightEqualizer();
	
	// And recheck when window gets resized.
	$(window).bind('resize',function(){
		heightEqualizer();
	});
});

$( document ).ready(function() {
	function headShotFixer() {
		let maxheight = 0;


        $('.round-corner').each(function () {
            if($(window).innerWidth() < 600) {
                $(this).removeClass('headshot');
                $(this).addClass('headshot-phone');
            }else{
                $(this).removeClass('headshot-phone');
                $(this).addClass('headshot');
            }
        });

        
	}
	
	// Fire.
	headShotFixer();
	
	// And recheck when window gets resized.
	$(window).bind('resize',function(){
		headShotFixer();
	});
});

$( document ).ready(function() {
	function screenClass() {
		if($(window).innerWidth() < 600) {
			console.log("run");
			$('.swapMe').each(function(i, el) {
				$(el).insertBefore($(el).prev());
			});
		}else{
			$('.swapMe').each(function(i, el) {
				$(el).insertAfter($(el).next());
			});
		} 
	}
	
	// Fire.
	screenClass();
	
	// And recheck when window gets resized.
	$(window).bind('resize',function(){
		screenClass();
	});
});