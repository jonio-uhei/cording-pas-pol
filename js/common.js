//ここからハンバーガーメニュー
$(function() {
    $('.toggle_contents').hide();
    $('.toggle-switch').on('click',function(){
        $('.toggle_contents').addClass('open').slideToggle();
    });
});
//ここまでハンバーガーメニュー