console.log(123);


$(function(){
    $(".menu").on("click",function(){
        console.log("clicked");
        $(".menu").siblings(".menubar").slideToggle()
    })

    $(window).scroll(function (){
        $('.fade').each(function(){
            let up = $(this).offset().top,
                scroll = $(window).scrollTop(),
                windowHeight = $(window).height();
            if (scroll > up - windowHeight + 300){
                $(this).addClass('scrollin');
                }
            });
        });
})