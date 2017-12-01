$(document).ready(function() {

$('h1').fadeIn(2500);
$('h3').fadeIn(2800);


$('.menu-btn').click(function() {
$('.navbar').slideToggle();
});
  
  
  $('.icon-wrapper').hover(function() {
    $(this).find('p').fadeToggle('3000');
  });
  

  
});
