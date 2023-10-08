function BuildMoment(dburl)
{
  $.ajax({
    url:dburl,
    success: function (data){
      var lines = data.split('\n');
      var text = "";
      for (var i = 0; i < lines.length; i++)
        if (lines[i].length > 0)
          text += "<blockquote class=\"twitter-tweet tw-align-center\" align=center data-conversation=none><img height=32 style=\"image-rendering: pixelated; vertical-align: middle;\" src=\"/img/loading.gif\"><a href=\"" + lines[i] + "\">" + lines[i] + "</a></blockquote>"
      var el = document.getElementById('tweets'); 
      el.innerHTML = text;
    }
  });
}
