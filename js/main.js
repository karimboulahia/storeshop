/** first slider */
$(".slider-one")
.not(".slick-intialized")
.slick({
    autoplay : true ,
    autoplayspeed :5000 ,
    dots : true ,
    prevArrow : ".site-slider .slider-btn .prev",
    nextArrow : ".site-slider .slider-btn .next",
}) ; 


$(".slider-two")
.not(".slick-intialized")
.slick({
    autoplay : true ,
    autoplayspeed :5000 ,
    slidesToShow:5 ,
    SlidesToCroll:5 ,
    prevArrow : ".site-slider-two .slider-btn .prev",
    nextArrow : ".site-slider-two .slider-btn .next",
}) ; 

