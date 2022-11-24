$(window).scroll(function(){
    $("#main-header").toggleClass('hidden',$(this).scrollTop()>5)
    $(".super-stander").toggleClass('fix',$(this).scrollTop()>5)
  });