// window resize event
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

// window load event
$(document).ready(function() {
  $('<button/>', {
    text: 'Top',
    id: 'scrollToTop',
    click: function() {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
    }
  }).appendTo('body').addClass('btn btn-primary fixed-bottom fixed-right');

  $('#scrollToTop').html('<i class="fas fa-arrow-up"></i>');
  $('#scrollToTop').addClass('btn-sm');
  $('#scrollToTop').css('width', '30px');
  $('#scrollToTop').css('right', '10px');
  $('#scrollToTop').css('bottom', '10px');
  $('#scrollToTop').css('margin-left', '10px');
  $('#scrollToTop').css('display', 'none');
});

// window scroll event
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('#scrollToTop').fadeIn();
  } else {
    $('#scrollToTop').fadeOut();
  }
});
