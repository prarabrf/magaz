$(document).ready(function () {
    
    $('.phone_mask').mask('+7(000)-000-00-00');
    
    $(".change_month").on('change',function(){
    $(".current_month").val(this.options[this.selectedIndex].value); 
});

    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });


    $("#form-2").validate({
        rules: {
            mail: {
                required: true,
                email: true
            }
        },
        messages: {
            mail: "Введите корректный e-mail"
        },
        submitHandler: function (form) {

            $.ajax({
                type: "POST",
                url: "../php/mail.php",
                data: $(form).serialize(),
                success: function () {
                    $(form).trigger('reset');
                    v_center('#feedback_wrapper');
                    overlay.stop().fadeIn(200);
                    $('#feedback_wrapper').stop().fadeIn(200);


                    $("#feedback_wrapper .after_text").html("Спасибо за подписку на 2 бесплатные записи докладов <br><br>Письмо-подтверждение уже ждет Вас на почте. <br><br>Если по какой-то причине вы не получите письмо в течение 15 минут и не найдете его в папке Спам, пишите нам на почту info@smmconfa.ru");

                    yaCounter64758655.reachGoal("videoform");

                }
            });
            return false; // required to block normal submit since you used ajax
        }
    });

    $(".free-video-pop__form").validate({
        rules: {
            mail: {
                required: true,
                email: true
            }
        },
        messages: {
            mail: "Введите корректный e-mail"
        },
        submitHandler: function (form) {

            $.ajax({
                type: "POST",
                url: "../php/mail.php",
                data: $(form).serialize(),
                success: function () {

                    user_block.stop().fadeOut(200);
                    $(form).trigger('reset');
                    v_center('#feedback_wrapper');
                    overlay.stop().fadeIn(200);
                    $('#feedback_wrapper').stop().fadeIn(200);


                    $("#feedback_wrapper .after_text").html("Спасибо за подписку на 2 бесплатные записи докладов <br><br>Письмо-подтверждение уже ждет Вас на почте. <br><br>Если по какой-то причине вы не получите письмо в течение 15 минут и не найдете его в папке Спам, пишите нам на почту info@smmconfa.ru");

                    yaCounter64758655.reachGoal("videoformpop");

                }
            });
            return false; // required to block normal submit since you used ajax
        }
    });



    $("#form-1").validate({
        rules: {
            tel: {
                required: true
            }
        },
        messages: {
            tel: "Введите номер телефона"
        },
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "../php/telegram.php",
                data: $(form).serialize(),
                success: function () {
                    $(form).trigger('reset');
                    v_center('#feedback_wrapper');
                    overlay.stop().fadeIn(200);
                    $('#feedback_wrapper').stop().fadeIn(200);

                    $("#feedback_wrapper .after_text").text("Спасибо. Специалист свяжется с вами в ближайшее время");

                    yaCounter64758655.reachGoal("form1");
                }
            });
            return false; // required to block normal submit since you used ajax
        }
    });

    $("#form-3").validate({
        rules: {
            tel: {
                required: true
            }
        },
        messages: {
            tel: "Введите номер телефона"
        },
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "../php/telegram.php",
                data: $(form).serialize(),
                success: function () {
                    $(form).trigger('reset');
                    v_center('#feedback_wrapper');
                    overlay.stop().fadeIn(200);
                    $('#feedback_wrapper').stop().fadeIn(200);

                    $("#feedback_wrapper .after_text").text("Спасибо. Специалист свяжется с вами в ближайшее время");

                    yaCounter64758655.reachGoal("form3");
                }
            });
            return false; // required to block normal submit since you used ajax
        }
    });

    $(function () {
        $(".tel-mask").mask("+7(999) 999-9999");
    });

    $('.faq-item__question').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).siblings('.faq-item__answer').slideUp();
        } else {
            $('.faq-item__question').removeClass('active');
            $('.faq-item__answer').slideUp();
            $(this).addClass('active');
            $(this).siblings('.faq-item__answer').slideDown();
        }

    });


    (function () {
        $('.menu-wrapper').on('click', function () {
            $('.hamburger-menu').toggleClass('animate');
            $('.nav-flex').toggleClass('active');
        })
    })();

    $('.anchor').bind('click.smoothscroll', function (e) {
        e.preventDefault();

        var target = $(this).data("scroll"),
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - navHeight
        }, 800, 'swing', function () {});
    });



    var navHeight = $('.nav').outerHeight();

    $('.nav_wrap').css('height', navHeight);





    var
        user_block = $('.user_block'),
        overlay = $('#overlay'),
        body = $('body'),
        pop_close = $('.pop_close');

    $(document).on('click', ".pop_close", function () {
        overlay.stop().fadeOut(200);
        user_block.stop().fadeOut(200);
    });

    overlay.click(function () {
        overlay.stop().fadeOut(200);
        user_block.stop().fadeOut(200);
    });

    $('.rassrochka_popup').click(function () {
        v_center('#pop_rassrochka');
        overlay.stop().fadeIn(200);
        $('#pop_rassrochka').stop().fadeIn(200);
    });
    
    $('.rassrochka_popup2').click(function () {
        v_center('#pop_rassrochka2');
        overlay.stop().fadeIn(200);
        $('#pop_rassrochka2').stop().fadeIn(200);
    });


    $('.prog_call').click(function () {
        v_center('#prog_pop');
        overlay.stop().fadeIn(200);
        $('#prog_pop').stop().fadeIn(200);
    });

    // var leave = true;

    // $(document).mouseleave(function (e) {
    //     if (e.clientY < 10 && leave) {
    //         v_center('#free-video-pop');
    //         overlay.stop().fadeIn(200);
    //         $('#free-video-pop').stop().fadeIn(200);
    //         leave = false;
    //     }
    // });




    var win_height;
    var win_scroll;
    var frm_height;

    function v_center(elem) {
        var user_block = $('' + elem);
        frm_height = user_block.outerHeight();
        win_height = $(window).height();
        win_scroll = $(window).scrollTop();
        if (frm_height >= win_height) {
            user_block.css('top', win_scroll + 40 + 'px');
        } else user_block.css('top', win_scroll + ((win_height - frm_height) / 2) + 'px');
    }









    var initPhotoSwipeFromDOM = function (gallerySelector) {

        // parse slide data (url, title, size ...) from DOM elements 
        // (children of gallerySelector)
        var parseThumbnailElements = function (el) {
            var thumbElements = el.childNodes,
                numNodes = thumbElements.length,
                items = [],
                figureEl,
                linkEl,
                size,
                item;

            for (var i = 0; i < numNodes; i++) {

                figureEl = thumbElements[i]; // <figure> element

                // include only element nodes 
                if (figureEl.nodeType !== 1) {
                    continue;
                }

                linkEl = figureEl.children[0]; // <a> element


                size = linkEl.getAttribute('data-size').split('x');

                // create slide object
                item = {
                    src: linkEl.getAttribute('href'),
                    w: parseInt(size[0], 10),
                    h: parseInt(size[1], 10)
                };



                if (figureEl.children.length > 1) {
                    // <figcaption> content
                    item.title = figureEl.children[1].innerHTML;
                }

                if (linkEl.children.length > 0) {
                    // <img> thumbnail element, retrieving thumbnail url
                    item.msrc = linkEl.children[0].getAttribute('src');
                }

                item.el = figureEl; // save link to element for getThumbBoundsFn
                items.push(item);
            }

            return items;
        };

        // find nearest parent element
        var closest = function closest(el, fn) {
            return el && (fn(el) ? el : closest(el.parentNode, fn));
        };

        // triggers when user clicks on thumbnail
        var onThumbnailsClick = function (e) {
            e = e || window.event;
            e.preventDefault ? e.preventDefault() : e.returnValue = false;

            var eTarget = e.target || e.srcElement;

            // find root element of slide
            var clickedListItem = closest(eTarget, function (el) {
                return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
            });

            if (!clickedListItem) {
                return;
            }

            // find index of clicked item by looping through all child nodes
            // alternatively, you may define index via data- attribute
            var clickedGallery = clickedListItem.parentNode,
                childNodes = clickedListItem.parentNode.childNodes,
                numChildNodes = childNodes.length,
                nodeIndex = 0,
                index;

            for (var i = 0; i < numChildNodes; i++) {
                if (childNodes[i].nodeType !== 1) {
                    continue;
                }

                if (childNodes[i] === clickedListItem) {
                    index = nodeIndex;
                    break;
                }
                nodeIndex++;
            }



            if (index >= 0) {
                // open PhotoSwipe if valid index found
                openPhotoSwipe(index, clickedGallery);
            }
            return false;
        };

        // parse picture index and gallery index from URL (#&pid=1&gid=2)
        var photoswipeParseHash = function () {
            var hash = window.location.hash.substring(1),
                params = {};

            if (hash.length < 5) {
                return params;
            }

            var vars = hash.split('&');
            for (var i = 0; i < vars.length; i++) {
                if (!vars[i]) {
                    continue;
                }
                var pair = vars[i].split('=');
                if (pair.length < 2) {
                    continue;
                }
                params[pair[0]] = pair[1];
            }

            if (params.gid) {
                params.gid = parseInt(params.gid, 10);
            }

            return params;
        };

        var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
            var pswpElement = document.querySelectorAll('.pswp')[0],
                gallery,
                options,
                items;

            items = parseThumbnailElements(galleryElement);

            // define options (if needed)
            options = {

                // define gallery index (for URL)
                galleryUID: galleryElement.getAttribute('data-pswp-uid'),

                getThumbBoundsFn: function (index) {
                    // See Options -> getThumbBoundsFn section of documentation for more info
                    var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                        pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                        rect = thumbnail.getBoundingClientRect();

                    return {
                        x: rect.left,
                        y: rect.top + pageYScroll,
                        w: rect.width
                    };
                }

            };

            // PhotoSwipe opened from URL
            if (fromURL) {
                if (options.galleryPIDs) {
                    // parse real index when custom PIDs are used 
                    // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                    for (var j = 0; j < items.length; j++) {
                        if (items[j].pid == index) {
                            options.index = j;
                            break;
                        }
                    }
                } else {
                    // in URL indexes start from 1
                    options.index = parseInt(index, 10) - 1;
                }
            } else {
                options.index = parseInt(index, 10);
            }

            // exit if index not found
            if (isNaN(options.index)) {
                return;
            }

            if (disableAnimation) {
                options.showAnimationDuration = 0;
            }

            // Pass data to PhotoSwipe and initialize it
            gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        };

        // loop through all gallery elements and bind events
        var galleryElements = document.querySelectorAll(gallerySelector);

        for (var i = 0, l = galleryElements.length; i < l; i++) {
            galleryElements[i].setAttribute('data-pswp-uid', i + 1);
            galleryElements[i].onclick = onThumbnailsClick;
        }

        // Parse URL and open gallery if it contains #&pid=3&gid=1
        var hashData = photoswipeParseHash();
        if (hashData.pid && hashData.gid) {
            openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
        }
    };

    // execute above function
    initPhotoSwipeFromDOM('.gallery');



});
