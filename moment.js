function BuildMoment(dburl)
{
  $.ajax({
    url:dburl,
    success: function (data){
      var lines = data.split('\n');
      var text = "";
      for (var i = 0; i < lines.length; i++)
      {
        if (lines[i].length > 0)
        {
          if (lines[i].includes("twitter.com")
          {
            text += "<blockquote class=\"twitter-tweet\" align=center data-conversation=none><img height=32 style=\"image-rendering: pixelated; vertical-align: middle;\" src=\"/img/loading.gif\"><a href=\"" + lines[i] + "\">" + lines[i] + "</a></blockquote>";
          }
          else if (lines[i].includes("bsky.app")
          {
            // unfortunately this hard codes my account's did:plc - which would be valid in the URL in place of my handle, but is not copied by default
            text += "<blockquote class=\"bluesky-embed\" data-bluesky-uri=\"at://did:plc:wr33bahkchvqpn4lxpvagp6h/app.bsky.feed.post/" + lines[i].slice(lines[i].lastIndexOf("/")+1) + "\"><img height=32 style=\"image-rendering: pixelated; vertical-align: middle;\" src=\"/img/loading.gif\"><a href=\"" + lines[i] + "\">" + lines[i] + "</a></blockquote>";
          }
        }
      }
      var el = document.getElementById('tweets'); 
      el.innerHTML = text;
    }
  });
}
