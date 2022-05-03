$('.thanks,.send_me').hide();

$('.contact_me').on('click',function(){
    $('.contact').animate({marginTop:'80px'},300);
    $('.top_flap').removeClass('close_sesame');
    $('.contact_form').delay(500).queue(function(){$('.contact_form').addClass('open_form').dequeue();});
    $(this).fadeOut(300);
    $('.send_me').fadeIn(300);

});

$('.reset,.send_me').on('click',function(){
    $('.contact').delay(800).animate({marginTop:'0px'},300);
    $('.top_flap').delay(800).queue(function(){$(this).addClass('close_sesame').dequeue();});
    $('.contact_form').removeClass('open_form');
    $('.send_me').fadeOut(300);
    $('.contact_me').fadeIn(300);
});