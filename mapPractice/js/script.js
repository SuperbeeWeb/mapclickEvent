$(document).ready(function () {
  var seoul = $('.seoul'),
      usa = $('.usa'),
      afreca = $('.afreca'),
      russia = $('.russia'),
      maplocation = $('#map_wrap');
  
   seoul.on('click', function (e) {
    e.preventDefault();
    maplocation.css({'background-position':'86.5% 42.6%','background-size':'500%'});
    $('.s-tip').css('display', 'block');
    $('.u-tip, .a-tip, .r-tip').css('display', 'none');
   });  
   usa.on('click', function (e) {
    e.preventDefault();
    maplocation.css({'background-position':'30% 70%','background-size':'500%'});
    $('.u-tip').css('display', 'block');
    $('.s-tip, .a-tip, .r-tip').css('display', 'none');
   });
   afreca.on('click', function (e) {
    e.preventDefault();
    maplocation.css({'background-position':'53% 56%','background-size':'500%'});
    $('.a-tip').css('display', 'block');
    $('.u-tip, .s-tip, .r-tip').css('display', 'none');
   });
   russia.on('click', function (e) {
    e.preventDefault();
    maplocation.css({'background-position':'78% 24%','background-size':'500%'});
    $('.r-tip').css('display', 'block');
    $('.u-tip, .a-tip, .s-tip').css('display', 'none');
   });


   
   $('.s-tip').on('click', function (e) {
      e.preventDefault();
      $('.sdesc').toggleClass('open');
   });
   $('.u-tip').on('click', function (e) {
      e.preventDefault();
      $('.udesc').toggleClass('open');
   });
   $('.a-tip').on('click', function (e) {
      e.preventDefault();
      $('.adesc').toggleClass('open');
   });
   $('.r-tip').on('click', function (e) {
      e.preventDefault();
      $('.rdesc').toggleClass('open');
   });



});