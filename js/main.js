var homeAnimation = function () {
	
	
    var txt = $('.title');
		txt.append('<div style="margin:0 auto; margin-top: -90px;" class="typing">Products run a race and Brands win it</div>');
    var data = [
        { time: 8000, txt: $('#title-line-1').text(), mini: false },
        { time: 10000, txt: $('#title-line-2').text(), mini: true},
        { time: 12000, txt: $('#title-line-3').text(), mini: false },
        { time: 14000, txt: $('#title-line-4').text(), mini: true}
        
    ];

    var width = Math.min(document.documentElement.clientWidth, window.innerWidth);

    if (width > 1024) {

        for (var index = 0; index < data.length; index++) {
            curr = data[index];
            prev = data[index-1] || null;

            var fn = function () {
                var curr1 = curr,
                    prev1 = prev,
                    txt2  = $('<div class="hide title"><span></span></div>');

                    $('.background').append(txt2);

                return function () {
					$('#we_are').removeAttr('style');
					$('#such_brand').removeAttr('style');
                    var txt1 = $('.title:not(.explode, .hide)');
                    txt2.find('span').text(curr1.txt);

                    if (curr1.mini) {
                        txt2.addClass('minion');
                        $('#home-bg-layer').addClass('minion');
                    } else {
                        txt2.removeClass('minion');
                        $('#home-bg-layer').removeClass('minion');
                    }
	
                    txt1.addClass('explode');
                    txt2.removeClass('hide');
                }
            }
	
			setTimeout(fn(),curr.time);

        }
        var timeout = 15000;
    } else {
        var timeout = 100;
    }


    setTimeout(function () {
        if (document.documentElement.clientWidth > 480) {
            $('.title:not(.explode)').css('height', '300px');
        } else {
            $('.title:not(.explode)').css('height', '150px');
        }

        $('.title:not(.explode)').html('<span id="span1">&nbsp;</span><br /><span id="span2">&nbsp;</span><br /><span id="span3">&nbsp;</span>');
        $('#home-bg-layer').removeClass('minion');
        $('.title:not(.explode)').addClass('minion');
        if ($('#title')) {
            $('#span1').typed({
                strings: [$('#title-line-11').text()],
                typeSpeed: 0
            });

            setTimeout(function () {
                // $('#span2').typed({
                //     strings: [$('#title-line-12').text()],
                //     typeSpeed: 15
                // });
				
				$('#span2').append('<img onload="this.style.opacity=1;"  class="img_big_logo1 img-responsive" src="images/big_logo.png" >');

            }, 200);

            setTimeout(function () {
                // $('#span3').typed({
                //     strings: [$('#title-line-13').text()],
                //     typeSpeed: 15
                // });

				$('#span3').append('<img onload="this.style.opacity=1;"  class="img_big_logo2 img-responsive" src="BrandPriest_files/creatived.png" >');

				$('#we_are').attr('style','display:none');
				$('#such_brand').attr('style','display:none');
            }, 100);

        }
    }, timeout);
}

function toggleCatsMenu() {
    if ($('nav#main-menu').length && $('nav#main-menu').hasClass('menu-open')) {
        $('nav#main-menu').removeClass('menu-open');
        $('#main-menu .menu-centered').toggleClass('ok-open');
        $('#menu-link').toggleClass('active');

        $('.traslable').toggleClass('translated');

        $('.menu-fader').addClass('hitt');

        setTimeout(function () {
            $('#cat-menus').toggleClass('active');
            $('#cats-link').toggleClass('active');

            if (!$('#cats-link').hasClass('active')) {
                $('.menu-fader').removeClass('hitt');
            }

            $('.traslable').toggleClass('translated2');
        }, 500);
    } else {
        $('.menu-fader').addClass('hitt');
        $('#cat-menus').toggleClass('active');
        $('#cats-link').toggleClass('active');

        if (!$('#cats-link').hasClass('active')) {
            $('.menu-fader').removeClass('hitt');
        }

        $('.traslable').toggleClass('translated2');
    }
}

function layout () {
    $('#menu-link').on('click', toggleMainMenu);
}

function home () {
    var width = window.innerWidth;

    if (width > 480) {
        var height = window.innerHeight - 50;
    } else {
        var height = window.innerHeight;
    }

    $('.h-480, #big-slider, section#wallpaper, #mobibg').attr('style', 'height: ' + height + 'px !important;'); 

    if (width > 480) {
        $('section#wallpaper.half-wp, #mobibg, .page-table').attr('style', 'height: ' + height/2 + 'px !important;'); 
    } else {
        $('section#wallpaper.half-wp, #mobibg, .page-table, .background').attr('style', 'height: ' + height + 'px !important;'); 
    }

    var maxWidth = 0;

    $('#home-grid .grid-item').each(function (e) {
        var el = $(this);

        maxWidth = el.width() > maxWidth
                 ? el.width()
                 : maxWidth;
    });

    $('#home-grid .grid-item').each(function (e) {
        var el = $(this);

        if (el.hasClass('full-height') || el.hasClass('full-height2') || el.hasClass('half-height') || el.hasClass('half-height2')) {

            if (el.hasClass('half-height') || el.hasClass('half-height2')) {
                if (this.getAttribute('id') != 'blogwork') {
                    this.style.paddingBottom = Math.ceil(maxWidth / 2) + 'px';
                } else {
                    if (window.innerWidth <= 480) {
                        this.style.paddingBottom = '60%';
                    }
                }
            } else {
                this.style.paddingBottom = maxWidth + 'px';
            }
        }
    });
}

function loadpage (timeout) {

    $('#menu-link span').addClass('rotating');
    $('#cats-link').hide();
    toggleCatsMenu();
    $('.menu-fader').addClass('hitt');
    $('#page-loader').css({
        top: 0,
        opacity: 1,
        backgroundColor: '#661a1a'
    });

    setTimeout(function () {
        $('#page-loader').css({
            top: '-100%',
            opacity: 0,
            backgroundColor: '#fff'
        });

        $('#menu-link span').removeClass('rotating');
        $('#cats-link').show();
        $('.menu-fader').removeClass('hitt');
    }, timeout);
}

function onContentEvent() {

    if ($('nav').length == 2 && $('#cat-menus').hasClass('postmenu')) {
        $('header').append('<a id="cats-link" class="header-item postmenu"> <span class="circle-freccia rot-lft"></span> </a>');
    } else if ($('nav').length == 2 && !$('#cat-menus').hasClass('postmenu')) {
        $('header').append('<a id="cats-link" class="header-item"> <span></span> </a>');
    }

    skrollr();
    layout();
    home();

    $('.background img, #mobibg img').willFillParent({ windowEvent: 'resize' });

    imagesLoaded(document.querySelectorAll('.background img, #mobibg img'), function (instance) {
        instance.elements.forEach(function (img) {
            $(img).addClass('loaded-img');
        });
    });

    $('#scroll-circle').on('click', function () {
        var width = Math.min(document.documentElement.clientWidth, window.innerWidth);
        if (width > 480) {
            $('body').scrollTo(document.documentElement.clientHeight - 50);
        } else {
            $('body').scrollTo(document.documentElement.clientHeight);
        }
    });

    $('#cats-link').on('click', toggleCatsMenu);

    var footer_post = function () {
        if ($('#post-actions') && document.documentElement.clientWidth <= 480) {
            $('#post-actions .item-full').prependTo('#post-actions');
        }
    }

    footer_post();

    var width = Math.min(document.documentElement.clientWidth, window.innerWidth);

    if(!/Android|iPhone/i.test(navigator.userAgent)) {
        $(window).on('debouncedresize', home);
    }

    $(window).on('resize', footer_post);
    
    if (document.getElementById('home-video')) {
        document.getElementById('home-video').play();
    }
}

function positionBackground () {
    $('.background img.sfondo-tablet').each(function () {
        var containerWidth = window.innerWidth > 480
                           ? window.innerWidth - 50
                           : window.innerWidth;

        $(this).css('width', 'auto');
        $(this).css('height', 'auto');
        $(this).css('height', $(this).parent().height() + 'px');

        var imgWidth = $(this).width();

        if (imgWidth < containerWidth) {
            $(this).css('height', 'auto');
            $(this).css('width', containerWidth + 'px');
            $(this).css('-webkit-transform', 'translateX(0px)');
        } else {
            $(this).css('-webkit-transform', 'translateX(' + ((containerWidth - imgWidth) / 2) + 'px)');
        }
    });
}

setTimeout(function () {
    if ($('#loader').length == 1 && window.innerWidth > 480) {
        $('#loader').addClass('load-border');
    }
}, 2500);

setTimeout(function () {
    if ($('#loader').length == 1) {
        $('#loader').addClass('hideup');
        homeAnimation();
		
        jQuery(window).on('scroll', function () {
            localStorage.setItem('cookie', 'ok');
            jQuery('#cookies').removeClass('open');
        });

        setTimeout(function () {
            if (!localStorage.getItem('cookie')) {
                jQuery('#cookies').addClass('open');
            }

            jQuery('#escicookie').on('click', function (evt) {
                evt.preventDefault();

                jQuery('#cookies').removeClass('open');
                localStorage.setItem('cookie', 'ok');
            });
        }, 1800);
    }
}, 10500);

setTimeout(function () {
    if ($('#loader').length == 1) {
        $('#loader').hide();
    }
}, 11000);


function onLoadEvent() {
    /*if ($('#loader')) {
        $('#loader').hide();
    }*/

    /*positionBackground();*/

    if ($('#loader').length != 1) {

        jQuery(window).on('scroll', function () {
            localStorage.setItem('cookie', 'ok');
            jQuery('#cookies').removeClass('open');
        });

        setTimeout(function () {
            if (!localStorage.getItem('cookie')) {
                jQuery('#cookies').addClass('open');
            }

            jQuery('#escicookie').on('click', function (evt) {
                evt.preventDefault();

                jQuery('#cookies').removeClass('open');
                localStorage.setItem('cookie', 'ok');
            });
        }, 500);
    }

    $('#open-contacts').on('click', function () {
        $('.cnt-fixed').addClass('active');
    });

    $('.contacts-close').on('click', function () {
        $('.cnt-fixed').addClass('justclosed');
        setTimeout(function () {
            $('.cnt-fixed').removeClass('active');
            $('.cnt-fixed').removeClass('justclosed');
        }, 700);
    });

    $('.post-main .padding-responsive img').bind('inview', function (event, visible) {
        if (visible) {
            $(this).addClass('cardiff');
        }
    });



    toggleMainMenu();
    toggleMainMenu();

    $(window).trigger('resize');

    setTimeout(function () {
        $('#mobibg img').removeClass('dontdisplay');
        $('.traslable-up').removeClass('traslable-up');
    }, 500);

    setTimeout(function () {
        $('.traslable-down').removeClass('transition-slow');
        $('.traslable-down').removeClass('traslable-down');
    }, 1000);
}

$(onContentEvent);
$(window).on('load', onLoadEvent);


$(function () {

    $('.award').each(function () {
        $(this).data('counter', '0');
        $(this).data('interval', -1);
        $(this).data('value', $(this).parent().parent().find('.cell:nth-child(2) span').text().replace('x', ''));
    });

    window.onscroll = function () {

        $('.award').each(function () {
            var th = this;

            if ((window.scrollY + document.documentElement.clientHeight) > $(this).offset().top && $(this).data('interval') == -1) {
                console.log($(this).offset().top);
                $(this).data('interval', setInterval(function () {
                    if ($(th).data('counter') == 14) {
                        clearInterval($(th).data('interval'));
                        $(th).parent().parent().find('.cell:nth-child(2) span').text('x' + $(th).data('value'));
                    } else {
                        $(th).data('counter', parseInt($(th).data('counter')) + 1);
                        $(th).parent().parent().find('.cell:nth-child(2) span').text('x' + (Math.floor(Math.random() * (10 - 0)) + 0));
                    }
                }, 85));
            }
        });
    };

});
