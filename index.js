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
    const toggleHoverState = function (prefix) {
        return function () { $(this).toggleClass(`${prefix}_${HOVER_COMPONENT_STATE}`) };
    };
    
    $(`.${COMPONENTS.head.elements.question}`).hover(
        toggleHoverState(COMPONENTS.head.elements.question),
        toggleHoverState(COMPONENTS.head.elements.question)
    );

    $(window).on('resize scroll', function() {
        $('.fade-in-block').each(function() {
          if ($(this).isInViewport()) {
            $(this).addClass(`${COMPONENTS.fadeInBlock.block}_${VISIBILITY_COMPONENT_STATE}`);
          }
        });
    });
});