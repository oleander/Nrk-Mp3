//1.1.6.3
//hardcorded protocol
var tmLoc = 'statistik-gallup.net';
var tmImg1 = new Image();
var tmImg2 = new Image();

function getTMqs(prot, furl, dotl, tmac, tmcc, enc, sec) {
    var n = new Date();
    var loc = window.location.href;

    if (furl.indexOf('R>') == 0) {
        furl = furl.substring(2);
  loc = furl;
    }

    if (loc.indexOf('#') != -1)
        loc = loc.substring(0,loc.indexOf('#'));
    if (loc.length > 256) {
        loc = loc.substring(0,253) + '...';
    }

    if (sec) {
        if(loc.indexOf('?') != -1) {
           loc += '&' + sec.join('&');
        } else {
           loc += '?' + sec.join('&');
        }
    }

    try {
      if (window.parent != window.self) {
          var ref = parent.document.referrer;
      } else {
          var ref = document.referrer;
      }
    } catch (e) {
      var ref = document.referrer;
    }

    var esc = function(str){return str.replace(/\*/g, '%2a').replace(/#/g, '%23')};
    var qs = esc(loc)+'*'+esc(furl)+'*'+esc(dotl)+'*'+esc(ref)+'*'+navigator.javaEnabled()+'/';
    if (window.screen) {
        qs += screen.width+'x'+screen.height + '/' + screen.colorDepth + '/';
    } else {
        qs += '//';
    };
    qs += tmac + '/' + tmcc + '/' + enc + '/' + n.getTime() + '/';
    
    tmImg1.onload = function(){tmImg2.src = prot + '://' + tmLoc + '/V11' + qs};
    tmImg1.src = prot + '://' + tmLoc + '/VC' + n.getTime();
}
