// JavaScript Document
var $j = jQuery.noConflict();
//ie7 dhtml fix.  Tester IE + versjon (lars endra)
$j.each($j.browser, function(i, val) {
   if(i=="msie" && $j.browser.version.substr(0,3)=="7.0") {
     var zIndexNumber = 1000;
		$j('div').each(function() {
			$j(this).css('zIndex', zIndexNumber);
			zIndexNumber -= 10;
	});
   }
 });

//p3-globalnavigasjon
$j(function($) {
				$j('.p3menu .sublvl').hide();
				$j('.p3menu .toplvl > li > a.drop').click(function() {
					if ( $j(this).hasClass('selected') ) {
						$j(this).removeClass('selected').next('div').fadeOut().hide();
					} else {
						$j('.p3menu .toplvl > li > a').removeClass('selected');
						$j('.p3menu .sublvl').fadeOut().hide();
						$j(this).addClass('selected').next('div').fadeIn().show();
					}
					return false;
				});
			});

//p3-globalnavigasjon