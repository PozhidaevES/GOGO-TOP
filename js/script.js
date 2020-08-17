$(document).ready(function() {
    let position = 0;
    const container = $('.slider-container');
    const track = $('.slider-track');
    const item = $('.slider-item');
    const arrowLeft = $('.arrow-left');  
    const arrowRight = $('.arrow-right');  
    const sliderWidth = container.width() * item.length;

    arrowLeft.click(function(){
        position += container.width();
        if(position >= 0){
            position = 0;
        };
        setPosition();
    });

    arrowRight.click(function(){
        position -= container.width();
        if(position <= -sliderWidth){
            position = 0;
        };
        
        setPosition();
    });
/*
    setInterval(function auto(){
        position -= container.width();
        if(position <= -sliderWidth){
            position = 0;
        };

        setPosition();
    },3000);
*/
    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`
        });
    };   
});


