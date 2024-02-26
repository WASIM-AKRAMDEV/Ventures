// JS for the nav / tabs functionality

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
        root.tabs = factory(root.jQuery);
    }
}(this, function($) {
    'use strict';

    // Example HTML:
    // <div class="nav">
    //     <ul class="list-unstyled">
    //         <li 
    //             class="nav__link nav__link--active"
    //             data-tab-btn="${the_slug}" 
    //             aria-selected="true" // if active
    //             role="tab"
    //             aria-controls="${the_identifier}-tab--${the_slug}"
    //         >
    //             tab btn text
    //         </li>
    //     </ul>
    //     <div class="tabs__tab-panels">
    //         <div 
    //             id="${the_identifier}-tab--${the_slug}" 
    //             class="nav__link nav__link--active" 
    //             data-tab-panel="${the_slug}" 
    //             data-active-panel="true"
    //         >
    //             Tab content
    //         </div>
    //     </div>
    // </div>
    // See styles/scss/02-molecule/_nav.scss for `.nav` styles

    const initTabs = () => {
        const tabsMainEls = document.querySelectorAll('[data-tabs-component]');

        const tabBtnSelector = {
            'base': 'nav__link',
            'active': 'nav__link--active'
        };

        const tabPanelSelector = {
            'base': 'nav__panel',
            'active': 'nav__panel--active'
        };

        tabsMainEls.forEach(tabComponentEl => {
            const tabBtnEls = tabComponentEl.querySelectorAll(`.${tabBtnSelector.base}`);

            tabBtnEls.forEach(tabBtnEl => {
                tabBtnEl.addEventListener('click', function(event) {
                    const targetPanelSlug = event.target.dataset['tabBtn'];

                    const activeTabsArr = tabComponentEl.querySelectorAll(`.${tabBtnSelector.active}`);
                    const activePanelsArr = tabComponentEl.querySelectorAll(`.${tabPanelSelector.active}`);

                    // unset all active tab-btn states inside affected tab component
                    activeTabsArr.forEach(activeTab => {
                        activeTab.classList.remove(tabBtnSelector.active);
                        activeTab.setAttribute('aria-selected', 'false');
                    });

                    // unset all active tab-panel states inside affected tab component
                    activePanelsArr.forEach(activePanel => {
                        activePanel.classList.remove(tabPanelSelector.active);
                    });

                    // make target tab-btn active
                    event.target.classList.add(tabBtnSelector.active);
                    event.target.setAttribute('aria-selected', 'true');

                    // make target panel active
                    tabComponentEl.querySelector(`[data-tab-panel="${targetPanelSlug}"]`).classList.add(tabPanelSelector.active);
                })
            });
        });
    };

    return initTabs();
}));