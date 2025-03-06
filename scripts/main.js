// Window resize event
$(window).resize(function() {
  if ($(window).width() < 768) {
    $('.col-md-6').removeClass('col-md-6').addClass('col-md-12');
    $('.col-md-12').addClass('mt-2');
    $('.self-text').attr('style', 'text-align: center !important');
  } else {
    $('.col-md-12').removeClass('mt-2');
    $('.col-md-12').removeClass('col-md-12').addClass('col-md-6');
    $('.self-text').removeAttr('style');
  }
});
