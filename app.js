

console.log(123);


// console.log(window_h);
let window_h = $(window).height();
$(function () {
    $(window).on("scroll", function () {
        let scroll_top = $(window).scrollTop(); //スクロールの位置の指定
        // console.log(scroll_top);
        $(".vox").each(function(){
            let elem =$(this).offset().top; //各box要素のtopの位置を取得する
            // console.log(elem);

            if(scroll_top >= elem - window_h +300){ //どのタイミングでフェードインさせるか
                $(this).addClass("fadein");
            }else{
                $(this).removeClass("fadein");
            }
        })
        $(".r-box").each(function(){
            let erem =$(this).offset().top;

            if(scroll_top >= erem - window_h +300){
                $(this).addClass("fadein");
            }else{
                $(this).removeClass("fadein");
            }
        })
    })
})


