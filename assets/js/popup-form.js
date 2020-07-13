document.addEventListener('DOMContentLoaded', function () {
    var style = document.createElement('style');
    // style.innerHTML = "\n    @keyframes nh_preloader {\n  0% { transform: translate(-50%,-50%) rotate(0deg); }\n  100% { transform: translate(-50%,-50%) rotate(360deg); }\n}\n.nh_preloader div {\n  position: absolute;\n  width: 80px;\n  height: 80px;\n  border: 20px solid #0067f2;\n  border-top-color: transparent;\n  border-radius: 50%;\n}\n.nh_preloader div {\n  animation: nh_preloader 1s linear infinite;\n  top: 75px;\n  left: 75px\n}\n.nh_preloader_body {\n  width: 150px;\n  height: 150px;\n  display: inline-block;\n  overflow: hidden;\n      background: rgba(255, 255, 255, 1);\n      border-radius: 8px;\n      left: calc(50%);\n    position: absolute;\n    -webkit-transform: translate(-50%, 0);\n    transform: translate(-50%, 0);\n    top: calc(50% - 100px);\n}\n.nh_preloader {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transform: translateZ(0) scale(1);\n  backface-visibility: hidden;\n  transform-origin: 0 0; /* see note above */\n}\n.nh_preloader div { box-sizing: content-box; }\n\n  .widget__close {\n    font-family: Arial,Helvetica,serif;\n    position: absolute;\n    left: calc(50%);\n    -webkit-transform: translate(-50%, 0);\n            transform: translate(-50%, 0);\n    padding: 48px;\n    width: 600px;\n    display: flex;\n    opacity: 0;\n    background-color: #FFFFFF;\n    box-shadow: 0 4px 24px rgba(114, 128, 170, 0.32);\n    z-index: -999;\n    transition: opacity ease-in-out 0.3s; }\n    @media screen and (max-width: 47.99875em) {\n      .widget__close {\n        width: calc(100% - 72px); } }\n\n    .widget-close__block {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      width: 736px;\n      margin: auto; }\n\n    .widget-close__title {\n      margin-bottom: 32px; }\n\n    .widget-close__buttons {\n      display: flex; }\n      .widget-close__buttons .widget-close__button:first-child {\n        margin-right: 24px; }\n      @media screen and (max-width: 47.99875em) {\n        .widget-close__buttons {\n          flex-direction: column; }\n          .widget-close__buttons .widget-close__button {\n            width: 100%; }\n            .widget-close__buttons .widget-close__button:first-child {\n              margin-right: 0;\n              margin-bottom: 12px; } }\n\n    #popup_body {\n      background-color: transparent !important; }\n\n    #nh_events_iframe {\n width: 772px;\n  max-height: 600px;\n      transition-property: top;\n      transition-duration: 0.5s;\n      -webkit-transition-property: top;\n      -webkit-transition-duration: 0.5s; }\n      @media screen and (max-width: 47.99875em) {\n        #nh_events_iframe {\n          width: calc(100% - 48px); } }\n\n    #nh_events_form_close {\n      left: calc(50% + 380px);\n      -webkit-transform: translate(-50%, 0);\n              transform: translate(-50%, 0);\n      width: 17px;\n      height: 17px;\n      margin: 0;\n      padding: 0;\n      border: 0;\n      display: block;\n      color: black;\n      position: absolute;\n      font-size: 30px;\n      line-height: 17px;\n      text-decoration: none;\n      font-family: Arial,Helvetica,serif;\n      cursor: pointer; }\n      @media screen and (max-width: 47.99875em) {\n        #nh_events_form_close {\n          right: 12px;\n          left: calc(100% - 32px);\n          -webkit-transform: none;\n                  transform: none; }\n      }\n\n  .e-btn {\n  text-align: center;\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  outline: none;\n  font-family: 'Inter', sans-serif;\n  text-transform: uppercase;\n  box-sizing: border-box;\n  cursor: pointer;\n  border: 0;\n  border-radius: 0;\n  transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  .e-btn:focus {\n    outline: none; }\n  .e-btn::-moz-focus-inner {\n    border: 0; }\n  .e-btn:disabled, .e-btn_disabled {\n    opacity: 0.5;\n    cursor: default;\n    pointer-events: none; }\n  .e-btn_size_medium {\n    font-size: 12px;\n    line-height: 16px;\n    letter-spacing: 0.04em;\n    padding: 12px 24px;\n    font-weight: 500; }\n  .e-btn_type_primary-default {\n    background-color: #0067F2;\n    color: #FFFFFF; }\n    .e-btn_type_primary-default:hover {\n      background-color: #0058F2; }\n    .e-btn_type_primary-default:active {\n      background-color: #0046F2; }\n\n  .e-btn_type_tertiary-ghost {\n    background-color: transparent;\n    color: #7280AA; }\n    .e-btn_type_tertiary-ghost:hover {\n      background-color: #E3E6EE;\n      color: #000000; }\n    .e-btn_type_tertiary-ghost:active {\n      background-color: #4B587C;\n      color: #FFFFFF; }\n  ";

    style.innerHTML = `
        .nh_events_wrapper {
            width:100%!important;
            height:100%!important;
            position:fixed;
            background-color:rgba(0,0,0,.5);
            z-index:9999999999!important;
            top:0;
            left:0;
            opacity:1;
            display:flex;
            justify-content: center;
            align-items: center;
        }
        #nh_events_iframe {
            opacity:0;
            border:0;
            border-radius: 8px;
            position: relative;
            top: 0;
            transition-property: top;
            transition-duration: 0.5s;
            -webkit-transition-property: top;
            -webkit-transition-duration: 0.5s;
            display: flex;
            align-items: center;
            transition-property: top;
            transition-duration: 0.5s;
            -webkit-transition-property: top;
            -webkit-transition-duration: 0.5s;
            overflow: hidden;
            -webkit-overflow-scrolling: touch;
            width: 768px;
        }
        .nh_body_noscroll {
            overflow: hidden;
            height: 100vh;
        }

        @keyframes nh_preloader {
            0%
                {
                    transform: translate(-50%,-50%) rotate(0deg);
                }
            100%
                {
                    transform: translate(-50%,-50%) rotate(360deg);
                }
        }
        .nh_preloader div {
            position: absolute;
            width: 80px;
            height: 80px;
            border: 20px solid #0067f2;
            border-top-color: transparent;
            border-radius: 50%;
        }
        .nh_preloader div {
            animation: nh_preloader 1s linear infinite;
            top: 75px;
            left: 75px
        }
        .nh_preloader_body {
            width: 150px;
            height: 150px;
            display: inline-block;
            overflow: hidden;
            background: rgba(255, 255, 255, 1);
            border-radius: 8px;
            left: calc(50%);
            position: absolute;
            -webkit-transform: translate(-50%, 0);
            transform: translate(-50%, 0);
            top: calc(50% - 100px);
        }
        .nh_preloader {
            width: 100%;
            height: 100%;
            position: relative;
            transform: translateZ(0) scale(1);
            backface-visibility: hidden;
            transform-origin: 0 0;
        }
        .nh_preloader div {
            box-sizing: content-box;
        }
        .widget__close {
            font-family: Arial,Helvetica,serif;
            position: absolute;
            left: calc(50%);
            -webkit-transform: translate(-50%, 0);
            transform: translate(-50%, 0);
            padding: 48px;
            width: 600px;
            display: flex;
            opacity: 0;
            background-color: #FFFFFF;
            box-shadow: 0 4px 24px rgba(114, 128, 170, 0.32);
            z-index: -999;
            transition: opacity ease-in-out 0.3s;
        }
        @media screen and (max-width: 47.99875em) {
            .widget__close {
                width: calc(100% - 72px);
            }
        }
        .widget-close__block {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 736px;
            margin: auto;
        }
        .widget-close__title {
            margin-bottom: 32px;
        }
        .widget-close__buttons {
            display: flex;
        }
        .widget-close__buttons .widget-close__button:first-child {
            margin-right: 24px;
        }
        @media screen and (max-width: 47.99875em) {
            .widget-close__buttons {
                flex-direction: column;
            }
            .widget-close__buttons .widget-close__button {
                width: 100%;
            }
            .widget-close__buttons .widget-close__button:first-child {
                margin-right: 0;
                margin-bottom: 12px;
            }
        }
        .e-btn {
            text-align: center;
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            outline: none;
            font-family: 'Inter', sans-serif;
            text-transform: uppercase;
            box-sizing: border-box;
            cursor: pointer;
            border: 0;
            border-radius: 0;
            transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        .e-btn:focus {
            outline: none;
        }
        .e-btn::-moz-focus-inner {
            border: 0;
        }
        .e-btn:disabled, .e-btn_disabled {
            opacity: 0.5;
            cursor: default;
            pointer-events: none;
        }
        .e-btn_size_medium {
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 0.04em;
            padding: 12px 24px;
            font-weight: 500;
        }
        .e-btn_type_primary-default {
            background-color: #0067F2;
            color: #FFFFFF;
        }
        .e-btn_type_primary-default:hover {
            background-color: #0058F2;
        }
        .e-btn_type_primary-default:active {
            background-color: #0046F2;
        }
        .e-btn_type_tertiary-ghost {
            background-color: transparent;
            color: #7280AA;
        }
        .e-btn_type_tertiary-ghost:hover {
            background-color: #E3E6EE;
            color: #000000;
        }
        .e-btn_type_tertiary-ghost:active {
            background-color: #4B587C;
            color: #FFFFFF;
        }
        .widget-cross {
            width: 40px;
            height: 40px;
            background-color: #FFFFFF;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            left: calc(50% + 370px);
            -webkit-transform: translate(-50%, 0);
            transform: translate(-50%, 0);
            position: absolute;
            z-index: 999999;
            box-shadow: 0 4px 24px rgba(114, 128, 170, 0.32);
            display: none;
        }

        @media screen and (max-width: 47.99875em) {
            .widget-cross {
                right: 12px;
                left: calc(100% - 48px);
                -webkit-transform: none;
                transform: none;
            }
        }
    `;

    document.head.appendChild(style);
    if (typeof selector !== 'undefined' && typeof url !== 'undefined') {
        var elements = document.querySelectorAll(selector);

        if (elements && elements.length > 0) {
            for (var i = 0; i < elements.length; i++) {
                elements[i].addEventListener('click touchstart', function () {
                    showEventsNhForm(url);
                });
            }
        }
    }
});


function parseQueryUtm(search) {
    var args = search.substring(1).split('&'),
    argsParsed = {}, i, arg, kvp, key, value;

    for (i=0; i < args.length; i++) {
        arg = args[i];
        if (-1 === arg.indexOf('=') && -1 !== arg.indexOf('utm_')) {
                argsParsed[decodeURIComponent(arg).trim()] = true;
        } else if (-1 !== arg.indexOf('utm_')) {
            kvp = arg.split('=');
            key = decodeURIComponent(kvp[0]).trim();
            value = decodeURIComponent(kvp[1]).trim();
            argsParsed[key] = value;
        }
    }

    return argsParsed;
}


function showEventsNhForm(url) {
    document.body.removeEventListener('click', showApprove);
    var width, left, searchQuery = {}, locationSearch = "";

    searchQuery = parseQueryUtm(window.location.search);
    locationSearch = Object.keys(searchQuery).map(function (key, index) {
        return key + "=" + searchQuery[key];
    }).join('&');
    url += locationSearch.length > 0 ? "?" + locationSearch : "";

    document.body.insertAdjacentHTML('beforeend',
    `
        <div class="nh_events_wrapper" id="nh_events_form">
            <div class="nh_preloader_body" id="nh_preloader">
                <div class="nh_preloader">
                    <div></div>
                </div>
            </div>
            <div class="widget__close widget-close" id="widget-close">
                <div class="widget-close__block">
                    <div class="widget-close__title">Вы действительно хотите закрыть окно?</div>
                    <div class="widget-close__buttons">
                        <button class="widget-close__button e-btn e-btn_size_medium e-btn_type_primary-default" id="nh_events_btn_continue">продолжить работу</button>
                        <button class="widget-close__button e-btn e-btn_size_medium e-btn_type_tertiary-ghost" id="nh_events_btn_close">закрыть</button>
                    </div>
                </div>
            </div>
            <div class="widget-cross" id="nh_events_form_close">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="black"/>
                </svg>
            </div>
            <iframe id="nh_events_iframe" width="100%" src=${url}></iframe>
        </div>
        `,
    );
    document.body.classList.add('nh_body_noscroll');
    var eventsIframe = document.getElementById('nh_events_iframe');

    eventsIframe.onload = function () {
        eventsIframe.contentWindow.postMessage(JSON.stringify({
            partner_referer: location.href
        }), 'https://events.nethouse.ru/buy_tickets/*');
        window.addEventListener("message", receiveMessage, false);
    };
}

function showApprove() {
    var approveBlock = document.getElementById('widget-close'),
        continueButton = document.getElementById('nh_events_btn_continue'),
        declineButton = document.getElementById('nh_events_btn_close');

    if (approveBlock === null) {
        return false;
    }

    approveBlock.style.display = 'flex';
    approveBlock.style.opacity = '1';
    approveBlock.style.zIndex = '999';
    continueButton.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        hideApprove();
    });
    declineButton.addEventListener("click", removeModal);
}

function hideApprove() {
    var approveBlock = document.getElementById('widget-close');
    approveBlock.style.opacity = '0';
    approveBlock.style.display = 'none';
    approveBlock.style.zIndex = '-999';
}

function removeModal() {
    hideApprove();
    var form = document.getElementById('nh_events_form');
    document.body.classList.remove('nh_body_noscroll');
    form.parentNode.removeChild(form);
}

function closeConfirm(event) {
    event.preventDefault();
    event.stopPropagation();
    showApprove();
}


function receiveMessage(event) {

    var data = JSON.parse(event.data),
        eventsIframe = document.getElementById('nh_events_iframe'),
        preloader = document.getElementById('nh_preloader'),
        eventsCloseModal = document.getElementById('widget-close'),
        eventsBody = document.getElementById('popup_body'),
        close = document.getElementById('nh_events_form_close'),
        formHeight = data.form_height ? data.form_height + 4 : 230,
        maxHeight = window.innerHeight * 0.8,
        top;

    console.log(data);

    if (data.noCloseConfirmation) {
        close.removeEventListener("click", removeModal, false);
        close.addEventListener("click", removeModal, false);

        document.body.removeEventListener('click', showApprove);
        document.body.addEventListener('click', showApprove);
    } else {
        close.removeEventListener("click", function(){closeConfirm(event);}, false);
        close.addEventListener("click", function(){closeConfirm(event);}, false);

        document.body.removeEventListener('click', showApprove);
        document.body.addEventListener('click', showApprove);
    }

    if ('redirect' in data) {
        window.open(data.redirect);
    }

    if (formHeight > maxHeight) {
        top = ((window.innerHeight - maxHeight) / 2) - 24;
    } else {
        top = ((window.innerHeight - formHeight) / 2) - 24;
    }

    preloader.style.opacity = '0';
    preloader.style.display = 'none';
    eventsIframe.style.opacity = '1';
    eventsIframe.style.maxHeight = '80%';
    close.style.display = 'flex';
    document.getElementById('nh_events_form').style.opacity = '1';
    console.log(formHeight);
    eventsCloseModal.style.top = top + 24 + 'px';
    close.style.top = top + 'px';
    eventsIframe.style.height = formHeight + 'px';
}
