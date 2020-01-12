window.onload = function () {


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

  $('.btn-submit').click(function(){
    let reg_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email = document.querySelector('.email-login');
    let reg_pass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    let pass = document.querySelector('.password-login');

    !reg_email.test(email.value) ? email.style.borderColor = '#ff6666' : email.style.borderColor = '#F4F7F8';
    !reg_pass.test(pass.value) ? pass.style.borderColor = '#ff6666' : pass.style.borderColor = '#F4F7F8';
  })

  $('.btn-create').click(function(){
    let reg_name = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    let name = document.querySelector('.name-register');
    let reg_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email = document.querySelector('.email-register');
    let reg_pass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    let pass = document.querySelector('.pass-register');

    !reg_email.test(email.value) ? email.style.borderColor = '#ff6666' : email.style.borderColor = '#F4F7F8';
    !reg_pass.test(pass.value) ? pass.style.borderColor = '#ff6666' : pass.style.borderColor = '#F4F7F8';
    !reg_name.test(name.value) ? name.style.borderColor = '#ff6666' : name.style.borderColor = '#F4F7F8';
  })

}
