/*-----------------------------------------------------------------------------------
    Template Name: Pixlab - Creative Agency HTML Template
    Description: Pixlab – Creative Agency HTML Template have an awesome design for a website of Agency, Web Studio, Blog, Gallery Photo, Corporate Company, Community and other. It’s the clean, modern and beautiful grid-based template.
    Author:  Wordpressriver
    Author URI: https://themeforest.net/user/wordpressriver
    Version: 1.0

    Note: This is Main Js file
-----------------------------------------------------------------------------------
    Js INDEX
    ===================
    ## Main Menu
    ## Document Ready
    ## Prealoder
    ## Sticky
    ## Back to top
    ## Counter
    ## Magnific-popup js
    ## Nice select
    ## Slick Slider
    ## Isotope JS
    ## wow JS
    ## Item Active
-----------------------------------------------------------------------------------*/

(function($) {
    'use strict';

    //===== Main Menu
    function mainMenu() {
        // Variables
        var var_window = $(window),
            navContainer = $('.header-navigation'),
            navbarToggler = $('.navbar-toggler'),
            navMenu = $('.nav-menu'),
            navMenuLi = $('.nav-menu ul li ul li'),
            closeIcon = $('.navbar-close');
        // navbar toggler
        navbarToggler.on('click', function() {
            navbarToggler.toggleClass('active');
            navMenu.toggleClass('menu-on');
        });
        // close icon
        closeIcon.on('click', function() {
            navMenu.removeClass('menu-on');
            navbarToggler.removeClass('active');
        });
        // adds toggle button to li items that have children
        navMenu.find('li a').each(function() {
            if ($(this).next().length > 0) {
                $(this).parent('li').append('<span class="dd-trigger"><i class="far fa-angle-down"></i></span>');
            }
        });
        // expands the dropdown menu on each click
        navMenu.find('li .dd-trigger').on('click', function(e) {
            e.preventDefault();
            $(this).parent('li').children('ul').stop(true, true).slideToggle(350);
            $(this).parent('li').toggleClass('active');
        });
        // check browser width in real-time
        function breakpointCheck() {
            var windoWidth = window.innerWidth;
            if (windoWidth <= 1199) {
                navContainer.addClass('breakpoint-on');
            } else {
                navContainer.removeClass('breakpoint-on');
            }
        }
        breakpointCheck();
        var_window.on('resize', function() {
            breakpointCheck();
        });
    };
    // Panel Widget
    var panelIcon = $('.bar-item'),
    panelClose = $('.panel-close,.panel-overlay'),
    panelWrap = $('.offcanvas-panel');
    panelIcon.on('click', function (e) {
        panelWrap.toggleClass('panel-on');
        e.preventDefault();
    });
    panelClose.on('click', function (e) {
        panelWrap.removeClass('panel-on');
        e.preventDefault();
    });
    // Nav Overlay On
    $(".navbar-toggler, .navbar-close,.nav-overlay").on('click', function (e) {
        $(".nav-overlay").toggleClass("active");
    });
    $(".nav-overlay").on('click', function (e) {
        $(".navbar-toggler").removeClass("active");
        $(".nav-menu").removeClass("menu-on");
    });

    // Document Ready
    $(document).ready(function() {
        mainMenu();
    });

    //===== Prealoder
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut('500');
    })
    
    //===== Sticky
    $(window).on('scroll', function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".header-navigation").removeClass("sticky");
        } else {
            $(".header-navigation").addClass("sticky");
        }
    });

    //===== Back to top
    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

    //===== Counter js
    $('.count').counterUp({
        delay: 100,
        time: 4000
    });

    //===== Magnific-popup js
    $('.video-popup').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });

    $(".img-popup").magnificPopup({
        type: "image",
         gallery: { 
          enabled: true 
        }
    });
    //===== Nice select js
    $('select').niceSelect();

    
    //===== Slick slider js
    
    $('.portfolio-slider-one').slick({
		dots: true,
		arrows: false,
        infinite: true,
		speed: 1500,
        autoplay: true,
		slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
		nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.testimonial-slider-one').slick({
		dots: true,
		arrows: false,
        infinite: true,
		speed: 1500,
        autoplay: true,
        vertical: true,
		slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
		nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false
                }
            }
        ]
    });
    var sliderdots= $('.testimonial-two-dots');
    $('.testimonial-slider-two').slick({
		dots: true,
		arrows: false,
        infinite: true,
		speed: 1500,
        autoplay: false,
        appendDots: sliderdots,
		slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
		nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>'
    });
    $('.testimonial-slider-three').slick({
		dots: true,
		arrows: false,
        infinite: true,
		speed: 1500,
        autoplay: true,
		slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
		nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    var sliderarrows= $('.partners-arrows');
    $('.partners-slider-one').slick({
		dots: false,
		arrows: true,
        infinite: true,
		speed: 1500,
        autoplay: true,
        appendArrows: sliderarrows,
		slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
		nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    //====== Isotope js
    $('.portfolio-area').imagesLoaded( function() {
        // items on button click
        $('.filter-btn').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        // menu active class
        $('.filter-btn li').on('click', function (e) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
        var $grid = $('.portfolio-grid').isotope({
            itemSelector: '.portfolio-column',
            layoutMode: 'fitRows'
        });
    });
    $('.masonry-portfolio').imagesLoaded( function() {
        // items on button click
        $('.filter-btn').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        // menu active class
        $('.filter-btn li').on('click', function (e) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
        var $grid = $('.masonry-row').isotope({
            itemSelector: '.portfolio-column',
            percentPosition: true
        });
    });

    //===== Wow js
    
    // new WOW().init();

    // Item Active
    $('.counter-area-v2').on('mouseover', '.counter-item', function() {
        $('.counter-item.item-active').removeClass('item-active');
        $(this).addClass('item-active');
    });

    //====== Parallax js

    $('.scene').each(function () {
        new Parallax($(this)[0]);
    });
    
    // page_scroll JS

    $("a.page-scroll").on('click', function (e) {
        e.preventDefault();
        var hash = this.hash;
        var position = $(hash).offset().top - 50;
        $("html").animate({
            scrollTop : position
        },1000);
    });
    //====== Pricing tab Js

    $('.pricing-nav-tab a:last-child').click(function () {
        $(this).parent('.pricing-nav-tab').addClass('for-year');
    });
    $('.pricing-nav-tab a:first-child').click(function () {
        $(this).parent('.pricing-nav-tab').removeClass('for-year');
    });

    //====== Custom Cursor + Disable Right Click (global)
    (function customCursorAndContextMenu(){
        // Disable right-click sitewide
        document.addEventListener('contextmenu', function(e){
            e.preventDefault();
        }, { passive: false });

        // Respect reduced motion and only run on precise pointers (desktops/laptops)
        var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        var isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
        if (prefersReduced || !isFinePointer) return;

        // Inject cursor styles
        if (!document.getElementById('astriftech-cursor-styles')){
            var styles = document.createElement('style');
            styles.id = 'astriftech-cursor-styles';
            styles.textContent = '\n'
                + 'html, body{ cursor: none; }\n'
                + 'body.has-custom-cursor *:not(input):not(textarea):not(select):not([contenteditable="true"]):not(iframe){ cursor: none !important; }\n'
                + 'body.has-custom-cursor input, body.has-custom-cursor textarea, body.has-custom-cursor select, body.has-custom-cursor [contenteditable="true"]{ cursor: text !important; }\n'
            + '#af-cursor{ position: fixed; top:0; left:0; width:0; height:0; pointer-events:none; z-index:9999; opacity:0; transition: opacity .25s ease; }\n'
            + '#af-cursor.visible{ opacity:1; }\n'
            + '#af-cursor.hidden{ opacity:0 !important; }\n'
            + '#af-cursor .dot, #af-cursor .ring{ position:absolute; border-radius:50%; transform: translate(-50%, -50%); will-change: transform, width, height, background, border-color, box-shadow; }\n'
            + '#af-cursor .dot{ width:6px; height:6px; background: var(--cursor-dot, #5956e9); box-shadow: 0 0 12px rgba(89,86,233,.6), 0 0 24px rgba(89,86,233,.3); }\n'
            + '#af-cursor .ring{ width:32px; height:32px; border:2px solid var(--cursor-ring, rgba(89,86,233,.65)); box-shadow: 0 0 18px rgba(89,86,233,.35), inset 0 0 18px rgba(89,86,233,.15); transition: width .18s ease, height .18s ease, border-color .18s ease, box-shadow .18s ease; }\n'
            + 'body.theme-dark #af-cursor .dot{ background: var(--accent-2,#60a5fa); box-shadow: 0 0 14px rgba(96,165,250,.8), 0 0 30px rgba(96,165,250,.4); }\n'
            + 'body.theme-dark #af-cursor .ring{ border-color: rgba(96,165,250,.7); box-shadow: 0 0 22px rgba(32,119,255,.45), inset 0 0 18px rgba(96,165,250,.22); }\n'
            + '#af-cursor.click .ring{ width:22px; height:22px; }\n'
            + '#af-cursor.hover .ring{ width:40px; height:40px; border-color: var(--cursor-hover, rgba(59,62,255,.8)); box-shadow: 0 0 26px rgba(59,62,255,.45), inset 0 0 18px rgba(59,62,255,.2); }\n'
            + 'body.theme-dark #af-cursor.hover .ring{ border-color: rgba(110,168,254,.9); box-shadow: 0 0 30px rgba(110,168,254,.55), inset 0 0 20px rgba(110,168,254,.25); }\n';
            document.head.appendChild(styles);
        }

        // Build cursor elements
        var cursor = document.createElement('div');
        cursor.id = 'af-cursor';
        var dot = document.createElement('div'); dot.className = 'dot';
        var ring = document.createElement('div'); ring.className = 'ring';
        cursor.appendChild(ring); cursor.appendChild(dot);
        document.body.appendChild(cursor);
        document.body.classList.add('has-custom-cursor');

        var pos = { x: window.innerWidth/2, y: window.innerHeight/2 };
        var target = { x: pos.x, y: pos.y };
        var rafId = null;
        var hoverSelectors = 'a, button, .btn, .main-btn, .btn-link, [role="button"], input[type="submit"], .navbar-toggler, .dd-trigger, .service-item, .information-item';
        var isDown = false;

        function onMove(e){
            target.x = e.clientX; target.y = e.clientY;
            cursor.classList.add('visible');
            var isEditing = !!(e.target && (e.target.closest('input, textarea, select, [contenteditable="true"]')));
            cursor.classList.toggle('hidden', isEditing);
            var isHover = !!(e.target && e.target.closest(hoverSelectors));
            cursor.classList.toggle('hover', isHover);
        }
        function onLeave(){ cursor.classList.remove('visible'); }
        function onDown(){ isDown = true; cursor.classList.add('click'); }
        function onUp(){ isDown = false; cursor.classList.remove('click'); }

        document.addEventListener('mousemove', onMove, { passive: true });
        document.addEventListener('mouseleave', onLeave, { passive: true });
        document.addEventListener('mousedown', onDown, { passive: true });
        document.addEventListener('mouseup', onUp, { passive: true });

        // If hovering over iframes, show native cursor and hide custom one
        function wireIframeCursorHandling(){
            var iframes = document.querySelectorAll('iframe');
            iframes.forEach(function(fr){
                fr.addEventListener('mouseenter', function(){ cursor.classList.add('hidden'); }, { passive: true });
                fr.addEventListener('mouseleave', function(){ cursor.classList.remove('hidden'); }, { passive: true });
            });
        }
        wireIframeCursorHandling();

        function animate(){
            pos.x += (target.x - pos.x) * 0.16;
            pos.y += (target.y - pos.y) * 0.16;
            ring.style.transform = 'translate(' + pos.x + 'px,' + pos.y + 'px) translate(-50%, -50%)';
            dot.style.transform = 'translate(' + target.x + 'px,' + target.y + 'px) translate(-50%, -50%)';
            rafId = requestAnimationFrame(animate);
        }
        rafId = requestAnimationFrame(animate);

        // Cleanup on page hide (SPA safety)
        window.addEventListener('pagehide', function(){
            cancelAnimationFrame(rafId);
        });
    })();

})(window.jQuery);