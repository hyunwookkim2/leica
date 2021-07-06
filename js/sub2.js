$(function(){
    var bd = '';
    $('.ct3 section .image').click(function(){
        bd = $(this).css('background-image')
        $('.ct3 section .mnimage').css('background-image', bd);
    });
});