(function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Script tag import i.e., IIFE
        root.ecQuiz = factory(root.jQuery);
    }
}(this, function($) {
    'use strict';

    const handleTitleClick = (titleEl) => {
        const isOpenClass = 'is-open';
        const currentParentEl = titleEl.closest('.js-footer__panel');
        const currentLinkListEl = titleEl.nextElementSibling;

        currentParentEl.classList.toggle(isOpenClass);
        currentLinkListEl.ariaExpanded = !JSON.parse(currentLinkListEl.ariaExpanded);
    };

    const initFooterCollapse = () => {
        const footerLinkTitleEls = document.querySelectorAll('[aria-controls^="footer-panel-"]');

        footerLinkTitleEls.forEach(function(titleEl) {
            titleEl.addEventListener('click', function() {
                handleTitleClick(titleEl);
            });
        });
    };

    return initFooterCollapse();
}));