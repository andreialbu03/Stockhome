/* UNIT 6 WORK */

// Run code once DOM is fully loaded, ready method is deprecated
jQuery(function() {

    // SOCIAL MEDIA BUTTONS

    // Add a custom social media for Instagram 
    jsSocials.shares.instagram = {
        label: "Instagram",
        logo: "fa fa-instagram",
        shareIn: "blank",
        shareUrl: "https://instagram.com/",
        countUrl: "",
        getCount: function(data) {
            return data.count;
        }
    };
    
    // Add the social media buttons to the page
    $("#share").jsSocials({
        text: "Check out this website!",
        shares:[
                "twitter", 
                "facebook", 
                "linkedin", 
                "pinterest", 
                "telegram", 
                {share: "instagram", label: "Post"},
                "email"
            ]
    });


    // SMOOTH SCROLLING

    // Using the localScroll plugin to scroll smoothly
    $('.sidemenu').localScroll();


    // SCROLL TO TOP BUTTON

    // If the page is scrolled more than 100px, show the "To Top" button
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 125) 
        {
            // $('.scroll-top').show().fadeIn();
            $('.scroll-top').css('display', 'block');
        } 
        else 
        {
            // $('.scroll-top').fadeOut().hide();
            $('.scroll-top').css('display', 'none');
        }
    });

    // Click event to scroll to the top of the page
    $('.scroll-top').on('click', function() {
        $('html, body').animate({scrollTop : 0}, 500);
    });

    /* 
    * Code for the page transitions plugin Animsition, copied from 
    * https://git.blivesta.com/animsition/fade/
    * Accessed: April 1, 2022 
    */

    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '', // e.g '<img src="loading.svg" />'
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'body',
        transition: function(url){ window.location.href = url; }
    });
});