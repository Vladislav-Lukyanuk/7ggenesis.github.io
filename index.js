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
          if ($(this).isInViewport()) {
            $(this).addClass(`${COMPONENTS.fadeInBlock.block}_${VISIBILITY_COMPONENT_STATE}`);
          }
        });
    }

    const adapt = function() {
        console.log('adapt')
        $('.logo').removeClass('logo_size-m');
        $('.logo').removeClass('logo_size-l');

        $('.page__content').removeClass('page__content_tablet');

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

        $('.contact__icon').removeClass('icon_right-offset');
        $('.contact__icon').removeClass('icon_bottom-offset');
        $('.contact__icon').removeClass('icon_l-size');
        $('.contact__icon').removeClass('icon_m-size');
        $('.partner__icon').removeClass('icon_l1-size');
        $('.partner__icon').removeClass('icon_top-offset');
        $('.partner__icon').removeClass('icon_bottom-offset');

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

        if(window.screen.width <= 425) {
            $('.logo').addClass('logo_size-l');

            $('.content').addClass('content_phone');

            $('.page__title').addClass('text_size-m-1');
            $('.page__title').addClass('page__title_underline');

            $('.footer__text').addClass('text_size-m');

            $('.contact').addClass('contact_offset-l');

            $('.icon__text').addClass('text_size-l');
            $('.partner__text').addClass('text_size-l');
            $('.partner__text').addClass('text_align-center');

            $('.contact__icon').addClass('icon_bottom-offset');
            $('.contact__icon').addClass('icon_l-size');
            $('.partner__icon').addClass('icon_l1-size');
            $('.partner__icon').addClass('icon_top-offset');
            $('.partner__icon').addClass('icon_bottom-offset');

            $('.contact').addClass('contact_as-columns');

            $('.partners').addClass('partners_l-gap');

            $('.partner').addClass('partner_as-column');
            $('.partner').addClass('partner_l-padding');
        } else {
            $('.logo').addClass('logo_size-m');

            $('.page__content').addClass('page__content_tablet');

            $('.content').addClass('content_tablet');

            $('.page__title').addClass('text_size-m');
            $('.page__title').addClass('page__title_small-underline');

            $('.footer__text').addClass('text_size-s');

            $('.contacts').addClass('contacts_tablet');

            $('.contact').addClass('contact_offset-m');

            $('.contact__icon').addClass('icon_right-offset');
            $('.contact__icon').addClass('icon_m-size');
            $('.partner__icon').addClass('icon_m1-size');

            $('.icon__text').addClass('text_size-m');
            $('.partner__text').addClass('text_size-m');
            $('.partner__text').addClass('partner__text_left-offset');
            $('.partner__text').addClass('text_align-justify');

            $('.partners').addClass('partners_m-gap');

            $('.partner').addClass('partner_m-padding');
        }
    }
    
    $(`.${COMPONENTS.head.elements.question}`).hover(
        toggleHoverState(COMPONENTS.head.elements.question),
        toggleHoverState(COMPONENTS.head.elements.question)
    );

    $(window).on('resize scroll', showBlocksInViewport);
    $(window).on('resize', adapt);

    showBlocksInViewport();
    adapt();
});