$(document).ready(function(){
    

    let hamburger = $('.hamburger');
    let closeBtn = $('.close-btn');
    let nav = $('.nav');

    hamburger.on('click', function(){
        nav.toggleClass('menu-open');
        if(hamburger.hasClass('scale-up') === true){
            hamburger.toggleClass('scale-up');
            hamburger.toggleClass('scale-down');
            closeBtn.toggleClass('scale-down');
            closeBtn.toggleClass('scale-up');
        } else {
            hamburger.toggleClass('scale-down');
            closeBtn.toggleClass('scale-down');
            closeBtn.toggleClass('scale-up');
        }
    });

    closeBtn.on('click', function(){
        nav.toggleClass('menu-open');
        hamburger.toggleClass('scale-down');
        hamburger.toggleClass('scale-up');
        closeBtn.toggleClass('scale-up');
        closeBtn.toggleClass('scale-down');
    });

    $(window).scroll(function(){
        let position = $(document).scrollTop();
        if(position > 0){
            $('header').addClass('header-scroll');
        } else {
            $('header').removeClass('header-scroll');
        }
        
    });

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    function welcomeLogoFadeOut(){
        let welcome = $('.welcome-logo');
        welcome.fadeOut('slow');
    }

    setTimeout(welcomeLogoFadeOut, 6000);

});