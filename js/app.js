$(document).ready(function ($) {
  $("section.tab-pane").addClass('d-none');
  $("section.tab-pane.show.active").removeClass('d-none');
  $("li > a").click(function () {
    console.log(this);
    $("section.tab-pane").addClass('d-none');
    $("section.tab-pane.show.active").removeClass('d-none');
  });
  
});

