// adjust the width of the columns based on the window size
function adjustWidth() {
  if ($(window).width() < 768) {
    $('.col-md-6').removeClass('col-md-6').addClass('col-md-12');
    $('.col-md-12').addClass('mt-2');
    $('.self-text').attr('style', 'text-align: center !important; margin-buttom: 10px !important;');
  } else {
    $('.col-md-12').removeClass('mt-2');
    $('.col-md-12').removeClass('col-md-12').addClass('col-md-6');
    $('.self-text').removeAttr('style');
  }
}

// add a button to scroll to the top of the page
function createLiftButton() {
  $('<button/>', {
    text: 'Top',
    id: 'scrollToTop',
    click: function() {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
    }
  }).appendTo('body').addClass('btn bg-mycolor fixed-bottom fixed-right shadow');

  $('#scrollToTop').html('<i class="fas fa-arrow-up"></i>');
  $('#scrollToTop').addClass('btn-sm');
  $('#scrollToTop').css('width', '30px');
  $('#scrollToTop').css('right', '10px');
  $('#scrollToTop').css('bottom', '10px');
  $('#scrollToTop').css('margin-left', '10px');
  $('#scrollToTop').css('display', 'none');
}

// window resize event
$(window).resize(function() {
  adjustWidth();
});

// window load event
$(document).ready(function() {
  adjustWidth();
  createLiftButton();
});

// window scroll event
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('#scrollToTop').fadeIn();
  } else {
    $('#scrollToTop').fadeOut();
  }
});
