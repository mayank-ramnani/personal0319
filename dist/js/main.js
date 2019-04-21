// $("#back-to-top")
// add class menuVisible to body when function triggered.
// remove class from body when anything else clicked or function triggered again.
// $("")

$(function() {
  $(".hamburger").click(function(event) {
    $(".containerMenu").slideToggle({ duration: 600 });
    $(".navbar").addClass("shrink");
    $(".navbar").removeClass("unshrink");
  });
});

$(function() {
  $(".containerMenu").click(function(e) {
    $(".containerMenu").slideUp({ duration: 300 });
  });
});
