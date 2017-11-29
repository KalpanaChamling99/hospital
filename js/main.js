
function ui(){

    this.init = function(){
        this.menuToggler(); 
        this.search();
    };
    
    //-----------menu----------------//
   
    this.menuToggler = function(){
        var $bar = $('.bars');
        if( $bar.length > 0 ){
            $bar.on('click',function(){
                $('.right-menu').slideToggle();
            });
        }
    };
  //-----------/menu----------------//

    //-----------Search----------------//
    
    this.search = function(){
        console.log('hi');
        var $search =$('.search-n-menu-icon');
        if($search.length > 0){
            $('.search').on('click',function(){
               
                $('#search').toggle(1000);
                $('.right-menu').toggle(1000);
                $('.search').toggleClass('fa-close');
            
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