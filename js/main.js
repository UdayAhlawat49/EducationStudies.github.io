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
    
    $('#example').vSelect({
    
        // allows multiselect
        multiSelect: true,
      
        // custom placeholder
        placeholder: 'Please select',
      
        // enable Check All checkbox
        checkAll: true,
        checkAllLabel: 'All',
      
        // expand all option groups on load
        expanded: true,
      
        // or "values"
        display: 'sum',
      
        // height of the dropdown
        trayHeight: '240px',
      
        // false = make the dropdown inline block
        dropdown: true,
      
        // allows to search options
        search: false,
        onChange:function(values, options) {
       
              console.log(values)
     
            }
          
        
      });
})
