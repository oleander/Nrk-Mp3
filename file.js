$(function() {
  $.ajax({
    url: "http://spillelister.p3.no/channels/10.json",
    dataType: 'jsonp',
    success: function(gigs) {
      var song, n, i, list, data = {}, length, length_n;
       
       /* Går igenom varje spelad låt, max 10 st */
      for (i = 0, length = gigs.length; i < length && i < 10; i++) {
        
        data[i] = {};
        song = gigs[i].gig.song;
        data[i].song = song.title;
        data[i].time = gigs[i].gig.time;
        
        /* Letar fram spotify-länken för varje låt */
        for (n = 0, length_n = song.urls.length; n < length_n; n++) {
          if(song.urls[n].url.match(/spotify/)){
            data[i].url = song.urls[n].url;
            break;
          }
        }
        
        /* Genrerar vyn m.h.a iCanHaz.js */
        list = ich.song({
          song: data[i].song,
          url:  data[i].url,
          time: data[i].time,
          cl:  data[i].url === undefined ? 'spotifyoff' : 'spotify'
        });
        
       $('tbody.songs').append(list[0]);
      }
    }
  });
  
  Beacon.connect('f8024b7d', ['mp3']);
  
  Beacon.listen(function (payload) {

  });
});