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

        $('.page__title').removeClass('text_size-s');
        $('.page__title').removeClass('text_size-m-1');
        $('.page__title').removeClass('page__title_small-underline');
        $('.page__title').removeClass('page__title_underline');

        $('.contact').removeClass('contact_offset-m');
        $('.contact').removeClass('contact_offset-l');

        $('.footer__text').removeClass('text_size-s');
        $('.footer__text').removeClass('text_size-m');

        $('.contact__icon').removeClass('contact__icon_right-offset');
        $('.contact__icon').removeClass('contact__icon_bottom-offset');
        $('.contact__icon').removeClass('contact__icon_l-size');
        $('.contact__icon').removeClass('contact__icon_m-size');

        $('.contact').removeClass('contact_as-columns');
        $('.partner__text').removeClass('partner__text_left-offset');
        $('.partner__text').removeClass('text_align-justify');
        $('.partner').removeClass('partner_as-column');
        $('.contact__text').removeClass('text_size-m');
        $('.contact__text').removeClass('text_size-l');

        if(window.screen.width <= 425) {
            $('.logo').addClass('logo_size-l');

            $('.page__title').addClass('text_size-m-1');
            $('.page__title').addClass('page__title_underline');

            $('.footer__text').addClass('text_size-m');

            $('.contact').addClass('contact_offset-l');
            $('.contact__text').addClass('text_size-l');
            $('.contact__icon').addClass('contact__icon_bottom-offset');
            $('.contact__icon').addClass('contact__icon_l-size');
            $('.contact').addClass('contact_as-columns');
            $('.partner').addClass('partner_as-column');
        } else {
            $('.logo').addClass('logo_size-m');

            $('.page__title').addClass('text_size-m');
            $('.page__title').addClass('page__title_small-underline');

            $('.footer__text').addClass('text_size-s');

            $('.contact').addClass('contact_offset-m');
            $('.contact__text').addClass('text_size-m');
            $('.contact__icon').addClass('contact__icon_right-offset');
            $('.contact__icon').addClass('contact__icon_m-size');
            $('.partner__text').addClass('partner__text_left-offset');
            $('.partner__text').addClass('text_align-justify');
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