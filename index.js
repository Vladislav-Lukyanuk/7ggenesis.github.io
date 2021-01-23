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
        $('.contact__icon').removeClass('contact__icon_right-offset');
        $('.contact__icon').removeClass('contact__icon_bottom-offset');
        $('.contact').removeClass('contact_as-columns');

        if(window.matchMedia('(max-width: 768px)').matches){
            $('.contact__icon').addClass('contact__icon_bottom-offset');
            $('.contact').addClass('contact_as-columns');
        } else {
            $('.contact__icon').addClass('contact__icon_right-offset');
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