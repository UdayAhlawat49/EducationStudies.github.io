$( document ).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    })


    //  *************************************** collapse show more and show less 
    
    let collapseText = $('.collapseText');
    let showMoreBtn = $('.collapseExample');

    showMoreBtn.click(function () {
      if (showMoreBtn.hasClass('collapsed')) {
        showMoreBtn.html("Show More &nbsp; <i class='bi bi-chevron-down'></i>");
        
      } else {
        showMoreBtn.html("Show Less &nbsp; <i class='bi bi-chevron-up'></i>");
    
      }
    });
        //  *************************************** collapse show more and show less  end

})
