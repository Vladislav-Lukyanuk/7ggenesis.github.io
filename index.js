const HOVER_COMPONENT_STATE = 'hover';
const VISIBILITY_COMPONENT_STATE = 'visible';

const COMPONENTS = {
    head: {
        block: 'head',
        elements: {
            question: 'head__question'   
        }
    },
    fadeInBlock: {
        block: 'fade-in-block'
    }
}

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
  
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
  
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(document).ready(() => {
    $('.current-year').text((new Date().getFullYear()).toString());  

    const toggleHoverState = function (prefix) {
        return function () { $(this).toggleClass(`${prefix}_${HOVER_COMPONENT_STATE}`) };
    };

    const showBlocksInViewport = function() {
        $('.fade-in-block').each(function() {
          if ($(this).isInViewport() && !$(this).hasClass(`${COMPONENTS.fadeInBlock.block}_${VISIBILITY_COMPONENT_STATE}`)) {
            $(this).addClass(`${COMPONENTS.fadeInBlock.block}_${VISIBILITY_COMPONENT_STATE}`);
          }
        });
    }

    const adapt = function() {
        $('.head').removeClass('head_inner-offset-m');
        $('.head').removeClass('head_inner-offset-l');

        $('.head__menu-item').removeClass('text_size-l');
        $('.head__menu-item').removeClass('text_size-m');
        $('.head__menu-item').removeClass('head__menu-item_phone');
        $('.head__menu-item').removeClass('head__menu-item_tablet');

        $('.head__menu').removeClass('head__menu_phone');
        $('.head__menu-icon').removeClass('head__menu-icon_hide');
        $('.head__question').removeClass('icon_s-size');
        $('.head__question').removeClass('head__question_hide');

        $('.logo').removeClass('logo_size-m');
        $('.logo').removeClass('logo_size-l');

        $('.page__content').removeClass('page__content_tablet');
        $('.page__content').removeClass('page__content_phone');

        $('.technologies').removeClass('technologies_as-column');
        $('.technologies').removeClass('technologies_m-gap');
        $('.technologies').removeClass('technologies_l-gap');

        $('.content').removeClass('content_tablet');
        $('.content').removeClass('content_phone');

        $('.page__title').removeClass('text_size-s');
        $('.page__title').removeClass('text_size-m-1');
        $('.page__title').removeClass('page__title_small-underline');
        $('.page__title').removeClass('page__title_underline');

        $('.contact').removeClass('contact_offset-m');
        $('.contact').removeClass('contact_offset-l');

        $('.footer__text').removeClass('text_size-s');
        $('.footer__text').removeClass('text_size-m');

        $('.office').removeClass('office_m-height');
        $('.office').removeClass('office_l-height');

        $('.business').removeClass('business_l-padding');
        $('.business').removeClass('business_as-row');
        $('.business').removeClass('business_m-padding');

        $('.contact__icon').removeClass('icon_right-offset');
        $('.contact__icon').removeClass('icon_bottom-offset');
        $('.contact__icon').removeClass('icon_l-size');
        $('.contact__icon').removeClass('icon_m-size');
        $('.partner__icon').removeClass('icon_l1-size');
        $('.partner__icon').removeClass('icon_top-offset');
        $('.partner__icon').removeClass('icon_bottom-offset');
        $('.dialog__byte').removeClass('icon_l1-size');
        $('.dialog__byte').removeClass('icon_l-size');
        $('.technology__icon').removeClass('icon_l1-size');
        $('.technology__icon').removeClass('icon_m1-size');
        $('.business__icon').removeClass('icon_l-size');
        $('.business__icon').removeClass('icon_m-size');

        $('.technoligy__circle').removeClass('technoligy__circle_l-size');
        $('.technoligy__circle').removeClass('technoligy__circle_m-size');
        $('.technology__text').removeClass('text_size-m');
        $('.technology__text').removeClass('text_size-l');

        $('.dialog').removeClass('dialog_as-row');

        $('.contacts').removeClass('contacts_tablet');

        $('.contact').removeClass('contact_as-columns');

        $('.partners').removeClass('partners_m-gap');
        $('.partners').removeClass('partners_l-gap');
        
        $('.partner').removeClass('partner_as-column');
        $('.partner').removeClass('partner_m-padding');
        $('.partner').removeClass('partner_l-padding');

        $('.icon__text').removeClass('text_size-m');
        $('.icon__text').removeClass('text_size-l');
        $('.partner__text').removeClass('partner__text_left-offset');
        $('.partner__text').removeClass('text_align-justify');
        $('.partner__text').removeClass('text_align-center');
        $('.partner__text').removeClass('text_size-m');
        $('.partner__text').removeClass('text_size-l');
        $('.dialog__message').removeClass('text_size-m');
        $('.dialog__message').removeClass('text_size-l');
        $('.dialog__message').removeClass('text_align-center');
        $('.dialog__message').removeClass('text_align-justify');
        $('.dialog__message').removeClass('dialog__message_x-offset');
        $('.dialog__message').removeClass('dialog__message_y-offset');
        $('.business__text').removeClass('text_size-m');
        $('.business__text').removeClass('text_size-l');
        $('.business__text').removeClass('text_align-center');
        $('.notification__text').removeClass('text_size-m');
        $('.notification__text').removeClass('text_size-m-05');

        if(window.screen.width <= 768 || window.matchMedia('(max-width: 768px)').matches) {
            $('.head').addClass('head_inner-offset-l');

            $('.head__menu-item').addClass('text_size-l');
            $('.head__menu-item').addClass('head__menu-item_phone');

            $(' .head__menu').addClass('head__menu_phone');
            $('.head__question').addClass('head__question_hide');

            $('.logo').addClass('logo_size-l');

            $('.page__content').addClass('page__content_phone');

            $('.technologies').addClass('technologies_l-gap');

            $('.technoligy__circle').addClass('technoligy__circle_l-size');
            $('.technology__text').addClass('text_size-l');

            $('.content').addClass('content_phone');

            $('.page__title').addClass('text_size-m-1');
            $('.page__title').addClass('page__title_underline');

            $('.footer__text').addClass('text_size-m');

            $('.office').addClass('office_l-height');

            $('.business').addClass('business_l-padding');

            $('.contact').addClass('contact_offset-l');

            $('.icon__text').addClass('text_size-l');
            $('.partner__text').addClass('text_size-l');
            $('.partner__text').addClass('text_align-center');
            $('.dialog__message').addClass('text_size-l');
            $('.dialog__message').addClass('text_align-center');
            $('.dialog__message').addClass('dialog__message_y-offset');
            $('.business__text').addClass('text_size-l');
            $('.business__text').addClass('text_align-center');
            $('.notification__text').addClass('text_size-m-05');

            $('.contact__icon').addClass('icon_bottom-offset');
            $('.contact__icon').addClass('icon_l-size');
            $('.partner__icon').addClass('icon_l1-size');
            $('.partner__icon').addClass('icon_top-offset');
            $('.partner__icon').addClass('icon_bottom-offset');
            $('.dialog__byte').addClass('icon_l1-size');
            $('.technology__icon').addClass('icon_l1-size');
            $('.business__icon').addClass('icon_l-size');

            $('.contact').addClass('contact_as-columns');

            $('.partners').addClass('partners_l-gap');

            $('.partner').addClass('partner_as-column');
            $('.partner').addClass('partner_l-padding');
        } else {
            $('.head').addClass('head_inner-offset-m');

            $('.head__menu-icon').addClass('head__menu-icon_hide');

            $('.head__question').addClass('icon_s-size');
            
            $('.head__menu-item').addClass('text_size-m');
            $('.head__menu-item').addClass('head__menu-item_tablet');

            $('.logo').addClass('logo_size-m');

            $('.page__content').addClass('page__content_tablet');

            $('.technologies').addClass('technologies_as-column');
            $('.technologies').addClass('technologies_m-gap');

            $('.technoligy__circle').addClass('technoligy__circle_m-size');
            $('.technology__text').addClass('text_size-m');

            $('.content').addClass('content_tablet');

            $('.page__title').addClass('text_size-m');
            $('.page__title').addClass('page__title_small-underline');

            $('.footer__text').addClass('text_size-s');

            $('.office').addClass('office_m-height');

            $('.business').addClass('business_as-row');
            $('.business').addClass('business_m-padding');

            $('.notification__text').addClass('text_size-m');

            $('.dialog').addClass('dialog_as-row');

            $('.contacts').addClass('contacts_tablet');

            $('.contact').addClass('contact_offset-m');

            $('.contact__icon').addClass('icon_right-offset');
            $('.contact__icon').addClass('icon_m-size');
            $('.partner__icon').addClass('icon_m1-size');
            $('.dialog__byte').addClass('icon_l-size');
            $('.technology__icon').addClass('icon_m1-size');
            $('.business__icon').addClass('icon_m-size');


            $('.icon__text').addClass('text_size-m');
            $('.partner__text').addClass('text_size-m');
            $('.partner__text').addClass('partner__text_left-offset');
            $('.partner__text').addClass('text_align-justify');
            $('.dialog__message').addClass('text_size-m');
            $('.dialog__message').addClass('text_align-justify');
            $('.dialog__message').addClass('dialog__message_x-offset');
            $('.business__text').addClass('text_size-m');

            $('.partners').addClass('partners_m-gap');

            $('.partner').addClass('partner_m-padding');
        }
    }
    
    $(`.${COMPONENTS.head.elements.question}`).hover(
        toggleHoverState(COMPONENTS.head.elements.question),
        toggleHoverState(COMPONENTS.head.elements.question)
    );

    $(window).on('resize', adapt);
    adapt();

    setTimeout(() => {
        $(window).on('resize scroll', showBlocksInViewport);
        showBlocksInViewport();
    }, 300);
});