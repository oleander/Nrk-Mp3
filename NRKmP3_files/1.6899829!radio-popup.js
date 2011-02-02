(function($) {

	function open(ch) {
		var url = "http://nettradio.nrk.no/default.php?kanal=" + ch;
		window.open(url, "Nettradio", 'width=628,height=377,left=10,top=10,directories=0,scrollbars=0,location=0,menubar=0,status=0,toolbar=0');
	}

	$(function() {
		$("select.js-audio").change(function() {
			open($(this).val());
		});
		
		$("a.js-audio, .js-audio a").click(function() {
			var kv = $(this).attr("href").split("?")[1].split(/[&=]/);
			var ch = "";

			for(var i = 0; i < kv.length; i++) {
				if(kv[i] == "kanal") {
					ch = kv[i+1];
					break;
				}
			}
			open(ch);
			return false;
		});
	});
})(jQuery);