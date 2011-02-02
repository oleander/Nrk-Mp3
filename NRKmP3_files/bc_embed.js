// Tester Brightcove embed

jQuery(function(){
		   
	jQuery(".fp-artikkeltopp, .playKnapp").click(function() {
	
	var video_id_bc = jQuery(".video_id.brightcove").text();
	var video_id_nett_tv_wmv = jQuery(".video_id.nett-tv-wmv").text();
	//var video_id = jQuery(".video_id.brightcove").text();

 if (video_id_bc) {

	var bc_embed = "<object id=\"flashObj\" classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" width=\"970\" height=\"545\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0\"><param name=\"bgcolor\" value=\"#000000\" /><param name=\"flashVars\" value=\"@videoPlayer=" + video_id_bc + "&amp;playerID=63036621001&amp;domain=embed&amp;\" /><param name=\"base\" value=\"http://admin.brightcove.com\" /><param name=\"seamlesstabbing\" value=\"false\" /><param name=\"allowFullScreen\" value=\"true\" /><param name=\"swLiveConnect\" value=\"true\" /><param name=\"allowScriptAccess\" value=\"always\" /><param name=\"src\" value=\"http://c.brightcove.com/services/viewer/federated_f9/63036621001?isVid=1&amp;isUI=1&amp;publisherID=376816878\" /><param name=\"name\" value=\"flashObj\" /><param name=\"flashvars\" value=\"@videoPlayer=" +  video_id_bc  + "&amp;playerID=63036621001&amp;&amp;domain=embed&amp;\" /><param name=\"allowfullscreen\" value=\"true\" /><embed id=\"flashObj\" type=\"application/x-shockwave-flash\" width=\"970\" height=\"545\" src=\"http://c.brightcove.com/services/viewer/federated_f9/63036621001?isVid=1&amp;isUI=1&amp;publisherID=376816878\" name=\"flashObj\" allowscriptaccess=\"always\" swliveconnect=\"true\" allowfullscreen=\"true\" seamlesstabbing=\"false\" base=\"http://admin.brightcove.com\" flashvars=\"@videoPlayer=" + video_id_bc + "&amp;playerID=63036621001&amp;&amp;domain=embed&amp;\" bgcolor=\"#000000\"></embed></object>";

 }
 
 if (video_id_nett_tv_wmv) {
	 
	 var bc_embed ="<iframe frameborder=\"0\" src=\"http://www1.nrk.no/nett-tv/wmgenerator.aspx?bakgrunn=000000&hastighet=1200&viskontroll=true&strekk=true&bredde=970&hoyde=610&klipp=" + video_id_nett_tv_wmv  +"\" width=\"970\" height=\"610\" name=\"videoFrame\" scrolling=\"NO\" noresize id=\"videoFrame\" marginheight=\"0\" marginwidth=\"0\"></iframe>";
 }

// TODO  fade ned?

	  
	//  alert(jQuery(this));
	
     	
	  jQuery(".fp-artikkeltopp").html(bc_embed);

	  jQuery(".fp-artikkeltopp").removeClass("fp-artikkeltopp").addClass("fp-artikkeltopp-playing");
	  
	   if (video_id_nett_tv_wmv) {
	  jQuery(".fp-artikkeltopp-playing").css('height', '610px');
	   }
	  
	  jQuery(".playKnapp").hide();
	  
	  //jQuery(".fp-artikkeltopp").removeClass();
	  
	  
	}); // end click
	
	
	// legger på klasse på bildet ved hover, så vi følger stylinga til knappen
	jQuery(".fp-artikkeltopp").hover(
  		function () {
   	 		jQuery(".playKnapp").addClass("hover");
		//	alert('over');
  		},
  		
		function () {
    		jQuery(".playKnapp").removeClass("hover");
  		}
	);
	
	
	// for forsida FP
	jQuery(".fp-forsidevideo").hover(
  		function () {
   	 		jQuery(".playKnapp-fp").addClass("hover");
		//	alert('over');
  		},
  		
		function () {
    		jQuery(".playKnapp-fp").removeClass("hover");
  		}
	);
	
	
	// for shortcode i artikkel
	/*
	jQuery(".fp-artikkelvideo").hover(
  		function () {
   	 		jQuery(".playKnapp-fp").addClass("hover");
		//	alert('over');
  		},
  		
		function () {
    		jQuery(".playKnapp-fp").removeClass("hover");
  		}
	);
	*/





	
	
/*

jQuery(".fp-forsidevideo, .playKnapp-fp").click(function() {
						
						
	//alert( $(this).find('video_id.brightcove') );
	
	var video_id_bc = jQuery(".video_id.brightcove").text();
	var video_id_nett_tv_wmv = jQuery(".video_id.nett-tv-wmv").text();
	//var video_id = jQuery(".video_id.brightcove").text();

 if (video_id_bc) {

	var bc_embed = "<object id=\"flashObj\" classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" width=\"640\" height=\"360\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0\"><param name=\"bgcolor\" value=\"#000000\" /><param name=\"flashVars\" value=\"@videoPlayer=" + video_id_bc + "&amp;playerID=63036621001&amp;domain=embed&amp;\" /><param name=\"base\" value=\"http://admin.brightcove.com\" /><param name=\"seamlesstabbing\" value=\"false\" /><param name=\"allowFullScreen\" value=\"true\" /><param name=\"swLiveConnect\" value=\"true\" /><param name=\"allowScriptAccess\" value=\"always\" /><param name=\"src\" value=\"http://c.brightcove.com/services/viewer/federated_f9/63036621001?isVid=1&amp;isUI=1&amp;publisherID=376816878\" /><param name=\"name\" value=\"flashObj\" /><param name=\"flashvars\" value=\"@videoPlayer=" +  video_id_bc  + "&amp;playerID=63036621001&amp;&amp;domain=embed&amp;\" /><param name=\"allowfullscreen\" value=\"true\" /><embed id=\"flashObj\" type=\"application/x-shockwave-flash\" width=\"640\" height=\"360\" src=\"http://c.brightcove.com/services/viewer/federated_f9/63036621001?isVid=1&amp;isUI=1&amp;publisherID=376816878\" name=\"flashObj\" allowscriptaccess=\"always\" swliveconnect=\"true\" allowfullscreen=\"true\" seamlesstabbing=\"false\" base=\"http://admin.brightcove.com\" flashvars=\"@videoPlayer=" + video_id_bc + "&amp;playerID=63036621001&amp;&amp;domain=embed&amp;\" bgcolor=\"#000000\"></embed></object>";

 }
 
 if (video_id_nett_tv_wmv) {
	 
	 var bc_embed ="<iframe frameborder=\"0\" src=\"http://www1.nrk.no/nett-tv/wmgenerator.aspx?bakgrunn=000000&hastighet=1200&viskontroll=true&strekk=true&bredde=970&hoyde=610&klipp=" + video_id_nett_tv_wmv  +"\" width=\"970\" height=\"610\" name=\"videoFrame\" scrolling=\"NO\" noresize id=\"videoFrame\" marginheight=\"0\" marginwidth=\"0\"></iframe>";
 }

// TODO  fade ned?

	  
	 // alert(jQuery(this));
	 //alert(video_id_bc);
     	
		
	  jQuery(".fp-forsidevideo." + String(video_id_bc) + "").html(bc_embed);

	  jQuery(".fp-forsidevideo").removeClass("fp-forsidevideo").addClass("fp-forsidevideo-playing");
	  
	   if (video_id_nett_tv_wmv) {
	  jQuery(".fp-forsidevideo-playing").css('height', '610px');
	   }
	  
	  jQuery(".playKnapp-fp." + String(video_id_bc) + "").hide();
	  
	  //jQuery(".fp-artikkeltopp").removeClass();
	  
	  
	}); // end click
	

*/

});


function spill_video(videoid){
	

	//alert(videoid);
	
	var bc_embed = "<object id=\"flashObj_" + videoid + "\" classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" width=\"640\" height=\"360\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0\"><param name=\"bgcolor\" value=\"#000000\" /><param name=\"flashVars\" value=\"@videoPlayer=" + videoid + "&amp;playerID=63036621001&amp;domain=embed&amp;\" /><param name=\"base\" value=\"http://admin.brightcove.com\" /><param name=\"seamlesstabbing\" value=\"false\" /><param name=\"allowFullScreen\" value=\"true\" /><param name=\"swLiveConnect\" value=\"true\" /><param name=\"allowScriptAccess\" value=\"always\" /><param name=\"src\" value=\"http://c.brightcove.com/services/viewer/federated_f9/63036621001?isVid=1&amp;isUI=1&amp;publisherID=376816878\" /><param name=\"name\" value=\"flashObj_" + videoid + "\" /><embed id=\"flashObj_" + videoid + "\" type=\"application/x-shockwave-flash\" width=\"640\" height=\"360\" src=\"http://c.brightcove.com/services/viewer/federated_f9/63036621001?isVid=1&amp;isUI=1&amp;publisherID=376816878\" name=\"flashObj_" + videoid + "\" allowscriptaccess=\"always\" swliveconnect=\"true\" allowfullscreen=\"true\" seamlesstabbing=\"false\" base=\"http://admin.brightcove.com\" flashvars=\"@videoPlayer=" + videoid + "&amp;playerID=63036621001&amp;&amp;domain=embed&amp;\" bgcolor=\"#000000\"></embed></object>";

	  
	jQuery(".fp-forsidevideo." + String(videoid) + "").html(bc_embed);
	
	jQuery(".fp-forsidevideo." + String(videoid) + "").removeClass("fp-forsidevideo").addClass("fp-forsidevideo-playing");
	  
	// fjerner Klikk for video i title
	jQuery(".playKnapp-fp." + String(videoid) + "").removeAttr("title");
		
	jQuery(".playKnapp-fp." + String(videoid) + "").hide();
	
	
	
}




function spill_video_artikkel(videoid, videotype){
	
	//alert(videoid);
	
	switch(videotype){
	
		case "brightcove":

			var bc_embed = "<object id=\"flashObj_" + videoid + "\" classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" width=\"640\" height=\"360\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0\"><param name=\"bgcolor\" value=\"#000000\" /><param name=\"flashVars\" value=\"@videoPlayer=" + videoid + "&amp;playerID=63036621001&amp;domain=embed&amp;\" /><param name=\"base\" value=\"http://admin.brightcove.com\" /><param name=\"seamlesstabbing\" value=\"false\" /><param name=\"allowFullScreen\" value=\"true\" /><param name=\"swLiveConnect\" value=\"true\" /><param name=\"allowScriptAccess\" value=\"always\" /><param name=\"src\" value=\"http://c.brightcove.com/services/viewer/federated_f9/63036621001?isVid=1&amp;isUI=1&amp;publisherID=376816878\" /><param name=\"name\" value=\"flashObj_" + videoid + "\" /><embed id=\"flashObj_" + videoid + "\" type=\"application/x-shockwave-flash\" width=\"640\" height=\"360\" src=\"http://c.brightcove.com/services/viewer/federated_f9/63036621001?isVid=1&amp;isUI=1&amp;publisherID=376816878\" name=\"flashObj_" + videoid + "\" allowscriptaccess=\"always\" swliveconnect=\"true\" allowfullscreen=\"true\" seamlesstabbing=\"false\" base=\"http://admin.brightcove.com\" flashvars=\"@videoPlayer=" + videoid + "&amp;playerID=63036621001&amp;&amp;domain=embed&amp;\" bgcolor=\"#000000\"></embed></object>";
		
		break;
		
		case "Nett-TV-WMV":
		
			var bc_embed ="<iframe frameborder=\"0\" src=\"http://www1.nrk.no/nett-tv/wmgenerator.aspx?bakgrunn=000000&hastighet=1200&viskontroll=true&strekk=true&bredde=640&hoyde=480&klipp=" + videoid  +"\" width=\"640\" height=\"480\" name=\"videoFrame\" scrolling=\"NO\" noresize id=\"videoFrame\" marginheight=\"0\" marginwidth=\"0\"></iframe>";
					
		break;
		
		

	}
	
	
	jQuery(".fp-artikkelvideo." + String(videoid) + "").html(bc_embed);
	
	jQuery(".fp-artikkelvideo." + String(videoid) + "").removeClass("fp-artikkelvideo").addClass("fp-artikkelvideo-playing");
	  
	jQuery(".playKnapp-fp." + String(videoid) + "").hide();
	
	// fjerner Klikk for video i title
	jQuery(".playKnapp-fp." + String(videoid) + "").removeAttr("title");

	
	if (videotype == "Nett-TV-WMV") {
		jQuery(".fp-artikkelvideo-playing." + String(videoid) + "").css('height', '480px');
	}
	
}


/*
function spill_video_nrk_nett_tv(videoid){
	
	//alert(videoid);
	
	 var bc_embed ="<iframe frameborder=\"0\" src=\"http://www1.nrk.no/nett-tv/wmgenerator.aspx?bakgrunn=000000&hastighet=1200&viskontroll=true&strekk=true&bredde=640&hoyde=480&klipp=" + videoid  +"\" width=\"640\" height=\"480\" name=\"videoFrame\" scrolling=\"NO\" noresize id=\"videoFrame\" marginheight=\"0\" marginwidth=\"0\"></iframe>";

	  
	jQuery(".fp-artikkelvideo." + String(videoid) + "").html(bc_embed);
	
	jQuery(".fp-artikkelvideo." + String(videoid) + "").removeClass("fp-artikkelvideo").addClass("fp-artikkelvideo-playing");
	  
	jQuery(".playKnapp-fp." + String(videoid) + "").hide();
	
	 //jQuery(".fp-artikkelvideo-playing").css('height', '480px');
}

*/