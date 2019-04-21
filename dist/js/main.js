// $("#back-to-top")
// add class menuVisible to body when function triggered.
// remove class from body when anything else clicked or function triggered again.
// $("")

// function toggleFunction() {
//   $(this).toggleClass("active"); //check this
//   $(".hamburger").toggleClass("is-active");
//   $(".containerMenu").slideDown("slow");
//   // $(".containerMenu").toggleClass("open");
// }

$(function() {
  $(".hamburger").click(function(event) {
    $(".containerMenu").slideToggle({ duration: 600 });
  });
});
