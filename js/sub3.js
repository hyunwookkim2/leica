





$(function(){
    
    var path = '';
    $('.ct1 .imgGroup img').click(changeImg);
    function changeImg(){
        path = $(this).attr('src');
        $('.ct1 .mnImage img').attr('src',path);
    }
    
    
    
    
    
    
    
    $('.btns .btnr').click(imgNext);
    function imgNext(){
        $('.ct2 .image:first').appendTo('.ct2 .imgGroup');
    }
    $('.btns .btnl').click(imgPrev);
    function imgPrev(){
        $('.ct2 .image:last').prependTo('.ct2 .imgGroup');
    }
})