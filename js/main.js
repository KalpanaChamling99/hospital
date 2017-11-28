
function ui(){

    this.init = function(){
        this.menuToggler(); 
    };

    this.menuToggler = function(){
        var $bar = $('.bars');
        if( $bar.length > 0 ){
            $bar.on('click',function(){
                $('.right-menu').slideToggle();
            });
        }
    };

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