$(".search-wiki").submit( function(event) {
  event.preventDefault();
  var sVal = $(".search-box").val();
  $.ajax({
  //  url: "https//en.wikipedia.org/w/api.php",
  url:"https://en.wikipedia.org/w/api.php?callback=?",
    data: {
      action: "opensearch",
      search: sVal,
      format: "json"
    },
    dataType: "jsonp",
    success: function(x) {
      
      console.log(x);
      var html = "";
      x = x.filter(function(val) {
        return val !== sVal;
      });
      console.log(x);
      var title = x[0];
      var description = x[1];
      var link = x[2];
      var sResults = $(".search-results");
      var mymessage = "<h1 class=message>Wikipedia Results</h1>";
      for (var i = 0; i < 10; i++) {
        var inc = i + 1;

        html +=
          "<a href =" +
          link[i] +
          "><div class= 'the-layout'><h3 ><span class = 'lead-number'>" +
          inc +
          ". " +
          title[i] +
          "</span><br>" +
          description[i] +
          "</h3></div></a>";

        sResults.show();
      }
      sResults.html(mymessage + html);
    }
  });
});
$(document).ready(function() {
  function get_random_color() {
    var letters = "0123456789ABCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.round(Math.random() * 15)];
    }
    return color;
  }
  $(".random-color").each(function() {
    $(this).css("color", get_random_color());
  });
});
