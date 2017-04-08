/**
 * Created by Administrator on 2017/4/5 0005.
 */

// 屏幕滑动
$(window).scroll(function () {
    if($(document).scrollTop() > 80){
        $('.nav').addClass('navWhite');
    }else {
        $('.nav').removeClass('navWhite');
    }
});

// 屏幕尺寸改变
$(window).resize(function () {
    if($(document).width() < 600){
         $('.navCon ul').css('display','none');
    }else {
        $('.navCon ul').css('display','block');
    }
});

// 下拉菜单
$('.navCon .iconImg').click(function () {
    //$('.navCon ul').toggleClass('block');
    $('.navCon ul').slideToggle("slow");
});

// 选项卡
$('.icon a').click(function () {
    $(this).addClass('cur').siblings().removeClass('cur');
    $('.home ul li').eq($(this).index()).addClass('cur').siblings().removeClass('cur');
});

// 轮播图

;(function () {
    var $banner = $('.header'),step = 0,$lis =$('.focusList li'),$imgs = $('.bannerInner div');
    timer = window.setInterval(autoMove,2000);
    function autoMove(){
        if(step == 1){
            step = -1;
        }
        step++;
        setBanner();
    }
    function setBanner(){ //设置哪一张图片应该显示
        $.each($imgs,function (index,item){
            if(index == step){
                $(this).css('zIndex',1).stop().animate({opacity:1},500,function (){
                    $(item).siblings().css('opacity',0);
                })
            }else{
                $(item).css('zIndex',0);
            }
        });
        $.each($lis,function (index,item){
            index == step ? $(item).addClass('selected') : $(item).removeClass('selected');
        });
    }

    $banner.on('mouseover',function (){
        window.clearInterval(timer);
    }).on('mouseout',function (){
        timer = window.setInterval(autoMove,2000);
    });

    (function bindEventForLis(){
        $.each($lis,function (){
            $(this).on('click',function (){
                step = $(this).index();
                setBanner();
            });
        });
    })();
})();











