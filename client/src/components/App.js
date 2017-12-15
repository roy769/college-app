$.getJSON("/releases", function(data) {
  for (var i =0; i < data.length; i++)
  {
    $(".releases").append("p data-id='" + data[i]._id +
"'>" + data[i].title + "<br />" + data[i].link + "</p>");
  }
});

$(document).on("click", "p", function() {
  $("#pip").empty();

var thisId = $(this).attr("data-id");

  $.ajax({
    method: "GET",
    url: "/releases/" +
    thisId
  })
    .done(function(data) {
      console.log(data);
      $("#pip").append("<h2>" + data.title + "</h2>");
      $("#pip").append("<input id= 'titleinput' name= 'title'>");
      $("#pip").append("<textarea id= 'bodyinput' name= 'body'></textarea>");

      $("#pip").append("<button data-id='" + data._id + "'id='savepip'>Save Pip</button>");

      if (data.note) {
        $("#titleinput").val(data.note.title);
        $("#bodyinput").val(data.note.body);
      }
    });
});

$(document).on("click", "#savepip", function() {
  var thisId = $(this).attr("data-id");

  $.ajax({
    method: "POST",
    url: "/releases/" + thisId,
    data: {
      title:
      $("#titleinput").val(),
      body:
      $("#bodyinput").val()
    }
  })
  .done(function(data) {
    console.log(data);
    $("#pip").empty();
  });
  $("#titleinput").val("");
  $("#bodyinput").val("");
});
