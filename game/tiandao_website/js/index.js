/* 
* @Author: anchen
* @Date:   2016-03-16 22:05:08
* @Last Modified by:   anchen
* @Last Modified time: 2016-08-31 23:41:10
*/

$(document).ready(function(){

    $(".btn").on('mouseenter mouseleave', function( e ){    
        var mE = e.type=='mouseenter';
        var c = ['_off','_on'];
        this.src = this.src.replace( mE?c[0]:c[1] , mE?c[1]:c[0] ); 
      });

    $('.content-right ').on('click','li span',function() {
      var $this = $(this).parent('li');
      if($this.is('active') == false){
        $this.addClass('active').siblings().removeClass('active');
        var ulIndex = $this.index();
        $('.banner ul').animate({'left':-100*ulIndex+'%'},500);
      }    
    });
    
});