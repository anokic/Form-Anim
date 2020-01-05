window.onload = function () {
  $('.info-container').width($('.div-form').width());

  $('.info').click(function(){

    if($(this).hasClass('info-anim')){
      $('.btn-change').toggleClass('change-anim');
      $('.form').toggleClass('form-anim');
      $(this).removeClass('info-anim')
      $('.info').addClass('size');
      $('.up').toggleClass('up-anim');
    } else {
      $('.btn-change').toggleClass('change-anim');
      $('.form').toggleClass('form-anim');
      $('.info').removeClass('size');
      $(this).addClass('info-anim');
      $('.up').toggleClass('up-anim');
    }

  })

}
