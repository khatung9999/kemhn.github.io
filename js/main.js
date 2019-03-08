jQuery(function ($) {
    'use strict',//#main-slider
     $(document).ready(function () {
         /******************************************
          Stick Menu
       ******************************************/
         var stickyTop = $('#header-top').offset().top;
         $(window).on('scroll', function () {
             if ($(window).scrollTop() > stickyTop) {
                 //alert(stickyTop);
                 $('#main-menu').addClass('stick');
             } else {
                 $('#main-menu').removeClass('stick');
             }
         });
     });
    $(function () {
        $('#main-slider.carousel').carousel({
            interval: 1000
            //,loop: true, autoplay: true, autoPlaySpeed: 1000, autoPlayTimeout: 2000,
            //autoplayHoverPause: true
        });
    });
    $('.accordion-toggle').on('click', function () {
        $(this).closest('.panel-group').children().each(function () { $(this).find('>.panel-heading').removeClass('active'); }); $(this).closest('.panel-heading').toggleClass('active');
    }); new WOW().init(); $(window).load(function () { 'use strict'; var $portfolio_selectors = $('.portfolio-filter >li>a'); var $portfolio = $('.portfolio-items'); $portfolio.isotope({ itemSelector: '.portfolio-item', layoutMode: 'fitRows' }); $portfolio_selectors.on('click', function () { $portfolio_selectors.removeClass('active'); $(this).addClass('active'); var selector = $(this).attr('data-filter'); $portfolio.isotope({ filter: selector }); return false; }); }); var form = $('#main-contact-form'); form.submit(function (event) { event.preventDefault(); var form_status = $('<div class="form_status"></div>'); $.ajax({ url: $(this).attr('action'), beforeSend: function () { form.prepend(form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn()); } }).done(function (data) { form_status.html('<p class="text-success">' + data.message + '</p>').delay(3000).fadeOut(); }); }); $('.gototop').click(function (event) { event.preventDefault(); $('html, body').animate({ scrollTop: $("body").offset().top }, 500); }); $("a[rel^='prettyPhoto']").prettyPhoto({ social_tools: false });
});
/**************/
function Captcha() {
    //var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
    //   'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 
    //       '0','1','2','3','4','5','6','7','8','9');
    var alpha = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
    var i;
    for (i = 0; i < 6; i++) {
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];
        var g = alpha[Math.floor(Math.random() * alpha.length)];
    }
    //var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;
    var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d;
    document.getElementById("mainCaptcha").innerHTML = code
    document.getElementById("mainCaptcha").value = code
}
function CaptchaReview() {
    //var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
    //   'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 
    //       '0','1','2','3','4','5','6','7','8','9');
    var alpha = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
    var i;
    for (i = 0; i < 6; i++) {
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];
        var g = alpha[Math.floor(Math.random() * alpha.length)];
    }
    //var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;
    var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d;
    document.getElementById("mainCaptcha_Review").innerHTML = code
    document.getElementById("mainCaptcha_Review").value = code
}
function ValidCaptcha() {
    var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
    var string2 = removeSpaces(document.getElementById('txtInputCaptcha').value);
    if (string1 == string2) {
        return true;
    } else {
        return false;
    }
}
function ValidCaptchaGolobal(lbCaptcha, txtCaptcha) {
    var string1 = removeSpaces(lbCaptcha);
    var string2 = removeSpaces(txtCaptcha);
    if (string1 == string2) {
        return true;
    } else {
        return false;
    }
}
function removeSpaces(string) {
    return string.split(' ').join('');
}
function isEmail(obj) {
    var emailReg = "^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$";
    if (!emailReg.test(obj.val())) {
        alert('Nhập đúng email');
        $("#lblEmail").html('Nhập đúng email');
        obj.focus();
        return false;
    } else {
        $("#lblEmail").html('');
        return true;
    }
}
function createCookie(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}
function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function setLocation(url) {
    window.location.href = url;
}