window.onload = function () {
  $('.info-container').width($('.div-form').width());

  $('.info').click(function(){


    if($(this).hasClass('info-anim')){
      $('.btn-change').toggleClass('change-anim');
      $('.form').toggleClass('form-anim');
      $(this).removeClass('info-anim')
      $('.info').addClass('size');
    } else {
      $('.btn-change').toggleClass('change-anim');
      $('.form').toggleClass('form-anim');
      $('.info').removeClass('size');
      $(this).addClass('info-anim');
    }

  })

  $('.in').on('transitionend webkitTransitionEnd oTransitionEnd', function () {

    $('.up').toggleClass('up-anim');
    console.log('Ccc');
  });

}
