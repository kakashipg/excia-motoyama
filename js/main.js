$(function () {
    
      // footer scroll
      let pagetop = $(".button");
      pagetop.hide();
    
      $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
          pagetop.fadeIn();
        } else {
          pagetop.fadeOut();
        }
      });
    });
    
    