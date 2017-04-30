$(document).ready(function() {
  $("#submit").on("click", function(event) {
    event.preventDefault();
    console.log("submit form");
    var $formData = $('.form-group');
    var user = $($formData[0]).find("#name").val();
    var photoURL = $($formData[0]).find("#photolink").val();
    var scores = [];
    for (var i = 1; i < $formData.length; i++) {
      scores.push($($formData[i]).find("#q" + i).val());
    }
    console.log(user, photoURL, scores);
    var newFriend = {
      name: user,
      profilePic: photoURL,
      scores: scores
    };
    $.post("/api/friends", newFriend, function(data) {
      $("#match-image").attr("src", data.profilePic);
      $("#match-name").text(data.name);
      $("#message").text("You're most compatable friend is: " + data.name)
      $("#modal").modal("show");

    });



  });
});
