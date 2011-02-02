jQuery(function($) {
	$("select.js-location").change(function() {
		window.location = $(this).val();
	});
	
	var ul = $('<ul></ul>').insertAfter(".nrk-globalnavigation .toplevel .nrk-logo");

	$('.nrk-globalnavigation ul h4').each(function(index) {
		$(this).hide();
		li = $("<li></li>").appendTo(ul);
		$("<a href=\"#\">" + $(this).text() + "</a>").appendTo(li).click(function() {
			li = $(this).parent("li");
			var enabled = li.is('.selected') ? false : true;
			li.siblings().andSelf().removeClass('selected');
			var sublevel = li.parent().closest("li").siblings().addClass('hidden').eq(index);
			$('li li:last-child', sublevel).css('marginRight','0');
			if(enabled) {
				li.addClass('selected');
				
				sublevel.removeClass('hidden').find("ul:first").hide().fadeIn().find("ul:first > li").each(function() {
					var height = $(this).hasClass("padded") ? sublevel.height() -20 : sublevel.height();
					$(this).height(height);
				});
			}
			return false;
		});
	});

	$('.nrk-globalnavigation .toplevel').append('<a class="aaretsnettsted2010" href="http://www.nrk.no/nyheter/kultur/1.7108735" title="NRK.no kåret til Årets nettsted">NRK.no kåret til Årets nettsted</a>');
	
});