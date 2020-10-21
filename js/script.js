$(document).ready(function () {
    function scrolling() {
        var scroll = $(this).scrollTop();
        if (scroll > 400) {
            $('#top').fadeIn();
        }

        else {
            $('#top').fadeOut();
        }
    }
    function scrolled() {
        var scroll = $(this).scrollTop();
        $('.nav-link').each(function () {
            var attr = $(this).attr('href');
            var position = $(attr).offset().top - 191;
            if (scroll >= position) {
                $('.nav-link').removeClass('active');
                $(this).addClass('active');
            }
        })
    }
    $(window).on('scroll', function () {
        scrolling(); scrolled();
    });

    $('#top').click(function () {
        $('html').animate({
            scrollTop: 0
        }, 700)
    })

    $('.nav-link').click(function (e) {
        e.preventDefault();
        $('.nav-link').removeClass('active');
        $('html').animate({
            scrollTop: $($(this).addClass('active').attr('href')).offset().top - $('.header-nav').innerHeight()
        }, 800)
    })
    $('.navbar-brand').click(function (e) {
        e.preventDefault();
        $('html').animate({
            scrollTop: $($(this).attr('href')).offset().top - $('.header-nav').innerHeight()
        }, 800)
    })
});