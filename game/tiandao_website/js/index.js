/* 
* @Author: anchen
* @Date:   2016-03-16 22:05:08
* @Last Modified by:   anchen
* @Last Modified time: 2016-08-31 11:38:46
*/

$(document).ready(function(){

    //角标的工作
        // $('.banner ol li').click(function(event) {
        //     var selfIndex = $(this).index()
        //     $(this).addClass('current').siblings().removeClass('current');
        //      $('.banner ul').stop().animate({'left':'-'+selfIndex+'00%'}, 400)//-1900为banner的宽
        //     num = selfIndex;
        //     num02 = selfIndex;
        // });

        //自动轮播
        // var num = 0;
        // var timer;
        // var num02 = 0;   //角标的标准
        // function autoPlay(){
        //     num++;
        //     num02++;
        //     if(num>3){//第5张必须要被看到,看到第5张瞬间切换到第1张
        //         num=1 //下一张要切换到第2张，num改成1
        //         $('.banner ul').css('left',0)
        //     }
        //     if(num02>2){
        //         num02=0
        //     }
        //     $('.banner ul').stop().animate({'left':'-'+num+'00%'}, 400)
        //     $('.banner ol li').eq(num02).addClass('current').siblings().removeClass('current');
        // }
        // timer = setInterval(autoPlay, 5000)
     

        //鼠标移上清除定时器 (键头和轮播圆点)
         $('.banner ol li').mouseenter(function(event) {
            clearInterval(timer);
        }).mouseleave(function(event) {
           timer=setInterval(autoPlay, 5000);
        });
        $('.banner span').mouseenter(function(event) {
            clearInterval(timer);
        }).mouseleave(function(event) {
           timer=setInterval(autoPlay,5000);
        });


        //鼠标移上清除定时器      
        /*$('.banner').mouseenter(function(event) {
            clearInterval(timer)
        }).mouseleave(function(event) {
            timer = setInterval(autoPlay, 2000)
        });*/

        //右按钮
        $('.right').click(function(event) {
           autoPlay();
        });
        //左按钮
        $('.left').click(function(event) {
            num--;
            num02--;
            if(num<0){
                num=3
                $('.banner ul').css('left','-400%')
            }
            if(num02<0){
                num02=3
            }
            $('.banner ul').stop().animate({'left':'-'+num+'00%'}, 400)
            $('.banner ol li').eq(num02).addClass('current').siblings().removeClass('current');
        });


});