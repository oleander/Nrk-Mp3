// Rev $Rev$

if(!this.JSON){this.JSON={}}(function(){function f(n){return n<10?'0'+n:n}if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z':null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key)}if(typeof rep==='function'){value=rep.call(holder,key,value)}switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null'}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null'}v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v}if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v}}if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' '}}else if(typeof space==='string'){indent=space}rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}return str('',{'':value})}}if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j}throw new SyntaxError('JSON.parse');}}}());
(function(m,u,n,g,e,d){for(g=u[d[32]]-1;g>=0;g--)n+=e[d[65]][d[70]](u[d[71]](g)-1);u=n[d[69]](' ');for(g=u[d[32]]-1;g>=0;g--)m=m[d[68]](e[d[67]](g%10+(e[d[65]][d[70]](122-e[d[66]][d[72]](g/10))),'g'),u[g]);e[d[3]]('_',m)(d)})("(9z 2w{8y s=6x8x129x;8y b=6w6x8x229x,c=6x8x259x8x169x3w!6x8x439x;9z e2w{5x.a5=s?2y s:2y 6x8x09x(_[7]);5x.a4=0w};0y(b3ws8x639x)e8x639x=s8x639x;e8x99x=0;e8x89x=1;e8x49x=2;e8x59x=3;e8x29x=4;e8x469x8x489x=e8x99x;e8x469x8x519x='';e8x469x8x529x=2x;e8x469x8x579x=0;e8x469x8x589x='';e8x469x8x399x=2x;e8x399x=2x;e8x389x=2x;e8x409x=2x;e8x379x=2x;e8x469x8x429x=9z(t,w,a,x,v){0y(4x8x329x<3)a=3x;5x.a2=a;8y r=5x,m=5x8x489x;0y(c){8y i=9z2w{0y(r.a58x489x7we8x29x){f(r);r8x149x2w}};0y(a)6x8x199x(_[41],i)}5x.a58x399x=9z2w{0y(b3w!a)3y;r8x489x=r.a58x489x;k(r);0y(r.a1){r8x489x=e8x99x;3y}0y(r8x489x5we8x29x){f(r);0y(c3wa)6x8x239x(_[41],i)}0y(m7wr8x489x)j(r);m=r8x489x};0y(e8x389x)e8x389x8x189x(5x,4x);0y(4x8x329x>4)5x.a58x429x(t,w,a,x,v);7z 0y(4x8x329x>3)5x.a58x429x(t,w,a,x);7z 5x.a58x429x(t,w,a);0y(!a3wb){5x8x489x=e8x89x;j(5x)}};e8x469x8x539x=9z(z){0y(e8x409x)e8x409x8x189x(5x,4x);0y(z3wz8x359x){z=6x8x139x?2y 6x8x139x2w8x549x(z):z8x649x;0y(!5x.a38x19x)5x.a58x559x(_[1],_[17])}5x.a58x539x(z);0y(b3w!5x.a2){5x8x489x=e8x89x;k(5x);9y(5x8x489x<e8x29x){5x8x489x0v;j(5x);0y(5x.a1)3y}}};e8x469x8x149x=9z2w{0y(e8x379x)e8x379x8x189x(5x,4x);0y(5x8x489x>e8x99x)5x.a1=3x;5x.a58x149x2w;f(5x)};e8x469x8x279x=9z2w{3y 5x.a58x279x2w};e8x469x8x289x=9z(u){3y 5x.a58x289x(u)};e8x469x8x559x=9z(u,y){0y(!5x.a3)5x.a3=1w;5x.a3[u]=y;3y 5x.a58x559x(u,y)};e8x469x8x159x=9z(u,h,d){8z(8y l=0,q;q=5x.a4[l];l0v)0y(q[0]5wu3wq[1]5wh3wq[2]5wd)3y;5x.a48x479x([u,h,d])};e8x469x8x509x=9z(u,h,d){8z(8y l=0,q;q=5x.a4[l];l0v)0y(q[0]5wu3wq[1]5wh3wq[2]5wd)1z;0y(q)5x.a48x569x(l,1)};e8x469x8x249x=9z(p){8y p={'type':p8x629x,'target':5x,'currentTarget':5x,'eventPhase':2,'bubbles':p8x209x,'cancelable':p8x219x,'timeStamp':p8x609x,'stopPropagation':9z2w1w,'preventDefault':9z2w1w,'0zitEvent':9z2w1w};0y(p8x629x5w_[49]3w5x8x399x)(5x8x399x8x299x4w5x8x399x)8x189x(5x,[p]);8z(8y l=0,q;q=5x.a4[l];l0v)0y(q[0]5wp8x629x3w!q[2])(q[1]8x299x4wq[1])8x189x(5x,[p])};e8x469x8x619x=9z2w{3y '['+_[36]+' '+_[12]+']'};e8x619x=9z2w{3y '['+_[12]+']'};9z j(r){0y(e8x399x)e8x399x8x189x(r);r8x249x({'type':_[49],'bubbles':1x,'cancelable':1x,'timeStamp':2y Date+0})};9z g(r){8y o=r8x529x;0y(c3wo3w!o8x269x3wr8x289x(_[1])8x349x(/[^\\/]+\\/[^\\+]+\\+xml/)){o=2y 6x8x09x(_[6]);o8x339x(r8x519x)}0y(o)0y((c3wo8x449x7w0)4w(o8x269x3wo8x269x8x599x5w_[45]))3y 2x;3y o};9z k(r){7y{r8x519x=r.a58x519x}3z(e)1w7y{r8x529x=g(r.a5)}3z(e)1w7y{r8x579x=r.a58x579x}3z(e)1w7y{r8x589x=r.a58x589x}3z(e)1w};9z f(r){r.a58x399x=2y 6x8x39x;6z r.a3};0y(!6x8x39x8x469x8x189x){6x8x39x8x469x8x189x=9z(r,n){0y(!n)n=0w;r.a0=5x;r.a0(n[0],n[1],n[2],n[3],n[4]);6z r.a0}};6x8x129x=e})2w;",">?!>=!..!,,!>.!>,!>\"!\"\"!>>!}}!\'\'!*)!~|!^\\!^^!\\`\\!uofnvdpe!xpeojx!tjiu!tuofnvhsb!fvsu!mmvo!ftmbg!iujx!fmjix!sbw!zsu!idujxt!gpfqzu!xpsiu!osvufs!xfo!gpfdobutoj!gj!opjudovg!spg!ftmf!fufmfe!umvbgfe!fvojuopd!idubd!ftbd!lbfsc!oj",'',0,this,'ActiveXObject Content-Type DONE Function HEADERS_RECEIVED LOADING Microsoft.XMLDOM Microsoft.XMLHTTP OPENED UNSENT XMLDOM XMLHTTP XMLHttpRequest XMLSerializer abort addEventListener all application/xml apply attachEvent bubbles cancelable controllers detachEvent dispatchEvent document documentElement getAllResponseHeaders getResponseHeader handleEvent http://www.w3.org/XML/1998/namespace http://www.w3.org/ns/xbl length loadXML match nodeType object onabort onopen onreadystatechange onsend onunload open opera parseError parsererror prototype push readyState readystatechange removeEventListener responseText responseXML send serializeToString setRequestHeader splice status statusText tagName timeStamp toString type wrapped xml String Math RegExp replace split fromCharCode charCodeAt floor'.split(' '));

var Beacon = {
    defaultOptions: {log: false, user: null},
    host: 'beaconpush.com',
    clientCookieName: "Beacon-Preferred-Client",
    clientIdCookieName: "Beacon-ClientID",
    activeClient: {name: ""},
    handlers: [],
    clients: [],

    connect: function (apiKey, channels, options) {
        var b = Beacon;
        b.clients = [Beacon.WebSocket, Beacon.FlashWebSocket, Beacon.XhrLongPoll, Beacon.FlashLongPoll];

        b.apiKey = apiKey;
        b.channels = channels instanceof Array ? channels : [channels];
        b.defaultOptions.user = b.readCookie(b.clientIdCookieName) || b.generateClientId();

        for (var c in channels) {
            channels[c] = encodeURIComponent(channels[c]);
        }

        // Merge option attributes
        for (var attr in options) { b.defaultOptions[attr] = options[attr]; }
        b.options = Beacon.defaultOptions;

        this.log("Browser " + navigator.userAgent + " on " + navigator.platform + " platform");

        b.findAndConnectClient();
    },

    disconnect: function () {
        Beacon.activeClient.disconnect();
    },

    onClientFailed: function (client) {
        var b = Beacon;
        for(var i=0; i< b.clients.length; i++) {
            if (b.clients[i] == client) {
                b.clients.splice(i, 1);
                break;
            }
        }

        b.eraseCookie(b.clientCookieName);
        setTimeout(Beacon.findAndConnectClient, 0);
    },

    findAndConnectClient: function () {
        var b = Beacon;
        var preferredClientName = b.readCookie(b.clientCookieName);

        if (preferredClientName != null) {
            var preferredClient = eval("Beacon." + preferredClientName);

            for(var i = 0; i< b.clients.length; i++) {
                if (b.clients[i] == preferredClient) {
                    Beacon.log("Found preferred client (" + preferredClientName + ") " + preferredClient);
                    b.clients.splice(i, 1);
                    break;
                }
            }

            // Put preferred first
            b.clients.unshift(preferredClient);
        }

        if (b.options.forceClient) {
            b.clients = [eval("Beacon." + b.options.forceClient)];
        }

        var client = null;

        for (var j = 0; j < b.clients.length; j++) {
            var c = b.clients[j];

            if (c.probe() != true) {
                b.clients.splice(j, 1);
                j--;
                b.log("Probe for client " + c.name + " failed, removing.");
                continue;
            }

            client = c;
            b.log("Using client " + c.name + "");
            break;
        }

        if (!client) {
            //FIXME: Call beacon not available callback here?
            return;
        }

        client.connect();
        b.log(client.name + " embedded.");
        b.activeClient = client;
        b.eraseCookie(b.clientCookieName);
        b.createCookie(b.clientCookieName, client.name, 24);
    },

    listen: function (handler) {
        Beacon.handlers.push(handler);
    },

    trigger: function (message) {
        for (var i in Beacon.handlers) {
            Beacon.handlers[i](message);
        }
    },

    // Helpers
    generateClientId: function () {
        var id = Beacon.guid();
        Beacon.createCookie(Beacon.clientIdCookieName, id, 6);
        return id;
    },

    log: function(msg) {
        if (this.options.log && "console" in window && "log" in window.console) {
            console.log("Beacon " + Beacon.activeClient.name + ": " + msg);
        }
    },

    S4: function () { return (((1+Math.random())*0x10000)|0).toString(16).substring(1); },
    guid: function () { return (Beacon.S4()+Beacon.S4()+Beacon.S4()+Beacon.S4()+Beacon.S4()); },

    createCookie: function (name, value, hours) {
        var expires = "";
        if (hours) {
            var date = new Date();
            date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    },

    readCookie: function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);

            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length,c.length);
        }
        return null;
    },

    eraseCookie: function (name) {
        Beacon.createCookie(name, "", -1);
    },

    createUri: function (protocol) {
        var b = Beacon;
        var uri = protocol + "://" + b.host + "/spheres/" + b.apiKey + "/users/" + b.options.user;
        var params = ['authToken=t'];
        var seqId = Beacon.getSequenceId();
        if (seqId) { params.push("sequenceId=" + seqId); }
        if (b.channels && b.channels.length > 0) { params.push("channels=" + b.channels.join(',')); }
        if (params.length > 0) {
            uri += "?";
            uri += params.join('&');
        }
        return uri;
    },

    setSequenceId: function (id) {
        Beacon.sequenceId = id;
        var cookieSeqId = Beacon.readCookie(Beacon.getCookieName());

        if (cookieSeqId != null && id > cookieSeqId) {
            Beacon.createCookie(Beacon.getCookieName(), id === null ? "0" : id, 1);
        }
    },

    getSequenceId: function () {
        if (Beacon.sequenceId == null) {
            // If it's the first time we're connecting, try reading from the cookie.
            Beacon.sequenceId = Beacon.readCookie(Beacon.getCookieName());
        }
        return Beacon.sequenceId;
    },

    getCookieName: function () { return "Beacon-SequenceID-" + Beacon.options.user; }
};

Beacon.FlashLongPoll = {
    /* SWFObject v2.2 <http://code.google.com/p/swfobject/> is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> */
    swfobject: function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onLoad",Y)}else{if(typeof O.onLoad=="function"){var X=O.onLoad;O.onLoad=function(){X();Y()}}else{O.onLoad=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in Beacon.FlashLongPoll.swfobject){Beacon.FlashLongPoll.swfobject[X]=null}Beacon.FlashLongPoll.swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}(),
    swfUrl: "http://" + Beacon.host + "/client.swf",
    holderId: "beaconFlashHolder",
    containerId: "beaconFlashClient",
    name: "FlashLongPoll",

    appendElement: function () {
        var holder = document.createElement("div");
        holder.id = Beacon.FlashLongPoll.holderId;
        holder.style.position = "fixed";
        holder.style.left = "0px";
        holder.style.bottom = "0px";

        var container = document.createElement("div");
        container.id = Beacon.FlashLongPoll.containerId;
        holder.appendChild(container);
        document.body.appendChild(holder);
    },

    removeElement: function () {
        Beacon.FlashLongPoll.swfobject.removeSWF(Beacon.FlashLongPoll.containerId);
        e = document.getElementById(Beacon.FlashLongPoll.holderId);
        if (e) document.body.removeChild(e);
    },

    probe: function () {
        if (!Beacon.FlashLongPoll.swfobject.hasFlashPlayerVersion("9.0.0")) {
            return "Flash player >= 9.0.0 missing. Cannot embed Flash long poll client.";
        }

        return true;
    },

    connect: function () {
        var b = Beacon.FlashLongPoll;

        b.removeElement();
        b.appendElement();

        var flashvars = {
            url: Beacon.host,
            user: Beacon.options.user,
            channels: Beacon.channels.join(','),
            apiKey: Beacon.apiKey,
            token: 't',
            onLog: "Beacon.FlashLongPoll.onLog",
            onMessage: "Beacon.FlashLongPoll.onMessage",
            onAuthError: "Beacon.FlashLongPoll.onAuthError",
            protocol: "comet"
        };

        Beacon.FlashLongPoll.swfobject.embedSWF(b.swfUrl, Beacon.FlashLongPoll.containerId, "2", "2", "9.0.0", "expressInstall.swf", flashvars, {allowscriptaccess: 'always', wmode: 'opaque'}, {}, b.onEmbed);
        return true;
    },

    disconnect: function () {
        var c = document.getElementById(Beacon.FlashLongPoll.containerId);
        if (c) { c.unembed(); }
        Beacon.FlashLongPoll.removeElement();
    },

    onEmbed: function (e) {},

    onMessage: function(msg) {
        // Try/catch needed because errors will not be propagated when called from Flash
        try {
            var messages = JSON.parse(unescape(msg)).messages;
            for (var i in messages) {
                Beacon.trigger(messages[i]);
            }
        } catch (err) {
            Beacon.log("Error triggering handler. Reason: " + err);
        }
    },

    onAuthError: function(msg) { Beacon.log(msg); },
    onLog: function(msg) { Beacon.log(unescape(msg)); }
};

Beacon.FlashWebSocket = {
    name: "FlashWebSocket",

    probe: function () {
        if (!Beacon.FlashLongPoll.swfobject.hasFlashPlayerVersion("9.0.0")) {
            return "Flash player >= 9.0.0 missing. Cannot embed Flash long poll client.";
        }
        return true;
    },

    connect: function () {
        var b = Beacon.FlashLongPoll;

        b.removeElement();
        b.appendElement();

        var flashvars = {
            url: Beacon.host,
            user: Beacon.options.user,
            channels: Beacon.channels.join(','),
            apiKey: Beacon.apiKey,
            token: 't',
            onLog: "Beacon.FlashLongPoll.onLog",
            onMessage: "Beacon.FlashWebSocket.onMessage",
            onAuthError: "Beacon.FlashLongPoll.onAuthError",
            onClientFailed: "Beacon.FlashWebSocket.onClientFailed",
            protocol: "websocket"
        };

        b.swfobject.embedSWF(b.swfUrl, Beacon.FlashLongPoll.containerId, "2", "2", "9.0.0", "expressInstall.swf", flashvars, {allowscriptaccess: 'always', wmode: 'opaque'}, {}, b.onEmbed);
        return true;
    },

    disconnect: function () {
        Beacon.FlashLongPoll.disconnect();
    },
    
    onClientFailed: function () {
          Beacon.log("Flash WebSocket failed, trying another transport")
        setTimeout(function () { Beacon.onClientFailed(Beacon.FlashWebSocket); }, 0);
    },

    onMessage: function(msg) {
        try {
            Beacon.trigger(JSON.parse(unescape(msg)));
        } catch (err) {
            Beacon.log("Error triggering handler. Reason: " + err);
        }
    },

    onAuthError: function(e) {
        Beacon.log("Authentication error!");
    },

    onLog: function(text) {
        Beacon.log(unescape(text));
    }
};


Beacon.XhrLongPoll = {
    name: "XhrLongPoll",
    xhr: new window.XMLHttpRequest,
    reconnectTime: 1000,

    onReadyStateChange: function () {
        var b = Beacon.XhrLongPoll;
        if (this.readyState != window.XMLHttpRequest.DONE) { return; }
        if (this.status == 200) {
            var seqId = this.responseText.match(/"seqId":(\d+)/)[1];
            b.setSequenceId(seqId);
            try {
                var messages = JSON.parse(this.responseText).messages;
                for (var i in messages) { Beacon.trigger(messages[i]); }
            } catch (err) {
                Beacon.log("Error triggering handler. Reason: " + err);
            }
            b.retry();
        } else if (this.status == 401) {
            Beacon.log("Authentication error, invalid token?");
        } else if (this.statusText == 'Gateway Time-out' || this.statusText == 'Bad Gateway') {
            // status code is always empty on 5xx.
            Beacon.XhrLongPoll.retry();
        } else {
            Beacon.log("Unknown error (status=" + this.status + ", responseText=" + this.responseText + ")");
        }
    },

    probe: function () {
        if (!Beacon.XhrLongPoll.detectCrossDomainCapability()) {
            return "Cross domain capability not supported";
        }
        return true;
    },

    connect: function () {
        var xhr = new XMLHttpRequest();
        if (xhr.withCredentials !== undefined) {
            Beacon.log("CORS support found!");
        }

        Beacon.XhrLongPoll.reconnect();
        return true;
    },

    disconnect: function () {
        var xhr = Beacon.XhrLongPoll.xhr;
        if (!xhr) return;
        xhr.onreadystatechange = null;
        xhr.abort();
        xhr = null;
    },

    detectCrossDomainCapability: function () {
        var xhr = null;
        try {
            xhr = new window.XMLHttpRequest;
            xhr.open("GET", "http://" + Beacon.host + "/crossdomain.txt", false);
            xhr.send(null);
        } catch (e) {
            Beacon.log("Couldn't send cross-domain request. Different domains?");
            return false;
        }

        if (xhr.responseText.indexOf("HELLO") == -1) {
            Beacon.log("Cross-domain request sent but payload checksum failed.");
            return false;
        }
        return true;
    },

    reconnect: function () {
        var xc = Beacon.XhrLongPoll;
        xc.xhr = new window.XMLHttpRequest;
        xc.xhr.onreadystatechange = xc.onReadyStateChange;

        if (xc.xhr.readyState == window.XMLHttpRequest.OPENED ||
            xc.xhr.readyState == window.XMLHttpRequest.HEADERS_RECEIVED ||
            xc.xhr.readyState == window.XMLHttpRequest.LOADING) {
            Beacon.log("Connection already open. Ignoring connect request.");
            return;
        }

        if (xc.xhr.readyState == window.XMLHttpRequest.UNSENT || xc.xhr.readyState == window.XMLHttpRequest.DONE) {
            xc.xhr.open("GET", xc.createUri(), true);
        }

        xc.xhr.send(null);
    },

    retry: function () { setTimeout(function () { Beacon.XhrLongPoll.reconnect(); }, Beacon.XhrLongPoll.reconnectTime); },

    createUri: function () {
        var b = Beacon;
        var uri = "http://" + b.host + "/spheres/" + b.apiKey + "/users/" + b.options.user;
        var params = ['authToken=t'];
        var seqId = Beacon.XhrLongPoll.getSequenceId();
        if (seqId) { params.push("sequenceId=" + seqId); }
        if (b.channels && b.channels.length > 0) { params.push("channels=" + b.channels.join(',')); }
        if (params.length > 0) {
            uri += "?";
            uri += params.join('&');
        }
        return uri;
    },

    setSequenceId: function (id) {
        Beacon.sequenceId = id;
        var cookieSeqId = Beacon.readCookie(this.getCookieName());

        if (cookieSeqId != null && id > cookieSeqId) {
            Beacon.createCookie(Beacon.getCookieName(), id === null ? "0" : id, 1);
        }
    },

    getSequenceId: function () {
        if (Beacon.sequenceId == null) {
            // If it's the first time we're connecting, try reading from the cookie.
            Beacon.sequenceId = Beacon.readCookie(this.getCookieName());
        }
        return Beacon.sequenceId;
    },

    getCookieName: function () { return "Beacon-SequenceID-" + Beacon.options.user; }
};


Beacon.WebSocket = {
    name: "WebSocket",
    reconnectDelays: [500, 2000, 5000, 10000, 20000, 60000, 60000],
    retries: 0,
    ws: null,
    beenConnected: false,
    pingTimerId: null,

    sendPingRequest: function () {
        var b = Beacon.WebSocket;
        if (!b.beenConnected == null) { return; }

        b.cancelPingTimeout();
        b.pingTimerId = setTimeout(function () { Beacon.onClientFailed(b); }, 2000);
        b.ws.send("__PING__");
    },

    probe: function () {
        var isGoogleChrome5 = navigator.userAgent.indexOf("Chrome/5") != -1;
        if (!("WebSocket" in window)) { return "WebSocket object not found"; }
        if (!isGoogleChrome5) { return "Incompatible browser version for WebSocket"; }

        Beacon.log("WebSocket support found!");
        return true;
    },

    connect: function () {
        Beacon.WebSocket.reconnect();
        return true;
    },

    disconnect: function () {
        if (Beacon.WebSocket.ws) {
            Beacon.WebSocket.ws.close();
        }
        b.cancelPingTimeout();
    },

    onOpen: function (e) {
        Beacon.log("Connected");
        Beacon.WebSocket.beenConnected = true;
        Beacon.WebSocket.retries = 0;

        Beacon.WebSocket.sendPingRequest();
    },

    onClose: function (e) {
        var b = Beacon.WebSocket;
        Beacon.log("Closed");
        Beacon.log(e);
        b.cancelPingTimeout();

        if (!Beacon.WebSocket.beenConnected) {
            Beacon.log("WebSocket failed, trying another transport")
            setTimeout(function () { Beacon.onClientFailed(b); }, 0);
            return;
        }

        Beacon.WebSocket.retry();
    },

    onError: function (e) {
        Beacon.log("Error");
        Beacon.onClientFailed(Beacon.WebSocket);
    },

    onMessage: function (e) {
        var b = Beacon.WebSocket;
        if (e.data == "__PONG__") {
            b.cancelPingTimeout();
            return;
        }

        var message = e.data.split("|", 2);
        var seqId = parseInt(message[0]);
        var content = message[1];
        Beacon.setSequenceId(seqId);
        Beacon.trigger(JSON.parse(content));
    },

    retry: function () {
        var b = Beacon.WebSocket;
        if (b.retries > b.reconnectDelays.length - 1) return;
        var delay = b.reconnectDelays[b.retries];
        setTimeout(function () { b.reconnect(); }, delay);
        Beacon.log("Retrying in " + delay / 1000 + " seconds");
        b.retries++;
    },

    reconnect: function () {
        var uri = Beacon.createUri('ws');
        Beacon.log("Connecting to " + uri);
        var ws = new WebSocket(uri);
        ws.onopen = Beacon.WebSocket.onOpen;
        ws.onclose = Beacon.WebSocket.onClose;
        ws.onerror = Beacon.WebSocket.onError;
        ws.onmessage = Beacon.WebSocket.onMessage;
        Beacon.WebSocket.ws = ws;
    },

    cancelPingTimeout: function () {
        var b = Beacon.WebSocket;
        if (b.pingTimerId != null) {
            clearTimeout(b.pingTimerId);
            b.pingTimerId = null;
        }
    }
};