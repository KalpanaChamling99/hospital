
function ui(){
    
        this.init = function(){
          
            this.search();
        };
       
        // -----------Search----------------//
        
        this.search = function(){
            var $search =$('.search-n-menu-icon');
            if($search.length > 0){
                $('.mobile-search').on('click',function(){
                   
                    $('#mobile-search').slideToggle();
                    // $('.right-menu').toggle(1000);
                    $('.mobile-search').toggleClass('fa-close');
                
                });
            }
        };
        
    
    
          //-----------/Search----------------//
        this.check = function(){
            alert('window is loaded');
        };
    
    };
    
    var uiInstance = new ui();
    
    $(document).ready(function(e){
        uiInstance.init();
    });
    
    $(window).load(function(){
        // uiInstance.check();
    });
    
    // var test = 'test';
    // (function( param ){
    //     test = 'js';
    //     console.log(test); 
    // })( test )