var LastFmNode = require('lastfm').LastFmNode;

var lastfm = new LastFmNode({
  api_key: 'e2a6b6788c47485e6428a3dc6c1bfdd3',
  secret: '3e1b84dc73b310e41dbbde2daa5eb1d4',
});

lastfm.request('artist.getInfo', {
  artist: "Wilco",
  handlers: {
    success: function(data) {
      console.log(data.artist.bio.summary);
    },
    error: function(err) {
      console.log("Error: " + err);
    }
  }
})