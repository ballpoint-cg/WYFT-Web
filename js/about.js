


$( document ).ready(function() {
	function heightEqualizer() {
        console.log("equalizing height");
		let maxheight = 0;

        $('.team-row').each(function () {
            console.log($(this).children()[0]);
            let height = ($(this).children().first()).outerHeight( true);
            $(this).children().eq(1).height(height);
            
            // console.log(this);
            // $(this).children().each(function () {
            //    maxheight = ($(this).height() > maxheight ? $(this).height() : maxheight); 
            //    console.log(this);
            // });
            // $(this).children()[0].outterHeight(true);
        });

        
	}
	
	// Fire.
	heightEqualizer();
	
	// And recheck when window gets resized.
	$(window).bind('resize',function(){
		heightEqualizer();
	});
});