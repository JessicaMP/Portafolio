$(document).ready(function ($) {
  $("section.tab-pane").addClass('d-none');
  $("section.tab-pane.show.active").removeClass('d-none');
  $("li > a").click(function () {
    console.log(this);
    $("section.tab-pane").addClass('d-none');
    $("section.tab-pane.show.active").removeClass('d-none');
  });
});

$(document).ready(function() {
  let spans = document.querySelectorAll('.word span');
  spans.forEach((span, idx) => {
    span.addEventListener('click', (event) => {
      event.target.classList.add('active');
    });
    span.addEventListener('animationend', (event) => {
      event.target.classList.remove('active');
    });

    setTimeout(() => {
      span.classList.add('active');
    }, 750 * (idx + 1));
  });

  $('.skillbar').each(function() {
    $(this).find('.skillbar-bar').animate({
      width: $(this).attr('data-percent')
    }, 20000);
  });

  $('.hover').mouseleave(function() {
    $(this).removeClass('hover');
  });
});
