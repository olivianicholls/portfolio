$(document).ready(function() {
  
  //Scroll function
  $(".scroll").click(function(event){		
		event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top - 90}, 800);
	});
  
  
  //Header fade in
  $("h1").fadeIn(2500);
  $("h3").fadeIn(2800);

  //Menu sliding function
  $(".menu-btn").click(function() {
    $(".navbar").slideToggle("300");
    
    //Menu button slide down
    if ($('.navbar').css('display') === 'block') {
      $(this).animate(
        {
          top: "50px"
        },
        {queue: false, duration: 400}
      );
    } 
  });
  
  //Menu button side back up
    $(".menu-btn").click(function(event) {
    if ($(this).css('top') === '50px') {
      $('.menu-btn').animate(
        {
          top: "0"
        },
      );
    }
    console.log(event);
  });

  //Fade in language text
  $(".icon-wrapper").mouseover(function() {
    $(this).find('.language-names').animate(
      {
        opacity: 1
      }, 600)
  });
  //Fade out language text
  $(".icon-wrapper").mouseout(function() {
     $(this).find('.language-names').animate(
      {
        opacity: 0
      }, 500)
  });
});
