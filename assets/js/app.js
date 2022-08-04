$(document).ready(function(){
    // OwlCarousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
    // Xử lý star rating
    no_star_class = 'far fa-star';
    half_star_class = 'fas fa-star-half-alt';
    one_star_class = 'fas fa-star';

    $('.rating').each(function(index, element){
        let score = $(this).attr('score');
        let rounded = Math.floor(score);
        let has_half = false;
        if((score-rounded)>0.5){
            rounded+=1;
        }
        else if(((score-rounded)<=0.5)&&((score-rounded)!=0) ){
            has_half = true;
        }
        $(this).children('i').each(function(index,element){
            if(index<rounded){
                $(this).removeClass();
                $(this).addClass(one_star_class);
            }
            if((index==rounded)&&has_half){
                $(this).addClass(half_star_class);
            }
        })
    })
    // Responsive menu
    $(".sub-nav").parent("li").addClass("has-child");
    $("ul#main-menu li.has-child").hover(function(){
        $(this).children("ul.sub-nav").toggle();
    });
    $("ul#repo-menu li.has-child").click(function(){
        $(this).children("ul.sub-nav").slideToggle();
        return false;
    })
    $(".toggler").click(function(){
        $("#repo-menu").slideToggle();
        $("ul#repo-menu li.has-child ul.sub-nav").slideUp();
        return false;
    })
    $(window).resize(function(){
        $("ul#repo-menu li.has-child ul.sub-nav").slideUp();
        $("ul#repo-menu").slideUp();
    })
    $(window).scroll(function(){
        $("ul#repo-menu li.has-child ul.sub-nav").slideUp();
        $("ul#repo-menu").slideUp();
    })

  });