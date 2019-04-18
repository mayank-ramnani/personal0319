let windowHeight = $(window).height();
let backToTopElement = $("#back-to-top");
// console.log(windowHeight);

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 64) {
      $(".navbar").addClass("shrink");
      $(".navbar").removeClass("unshrink");
    } else {
      $(".navbar").removeClass("shrink");
      $(".navbar").addClass("unshrink");
    }
  });
});

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > windowHeight / 2) {
      backToTopElement.show();
    } else {
      backToTopElement.hide();
    }
  });
});
