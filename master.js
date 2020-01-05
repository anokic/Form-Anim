window.onload = function () {
  $('.info-container').width($('.div-form').width());

  $('.btn-change').click(function(){

    if($('.info').hasClass('info-anim')){
      $('.btn-change').toggleClass('change-anim');
      $('.form').toggleClass('form-anim');
      $('.info').removeClass('info-anim');
      $('.info').addClass('size');
    } else {
      $('.btn-change').toggleClass('change-anim');
      $('.form').toggleClass('form-anim');
      $('.info').removeClass('size');
      $('.info').addClass('info-anim');
    }

  })

}
