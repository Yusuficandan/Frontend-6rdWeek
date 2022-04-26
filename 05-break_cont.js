
(function (window, document, undefined) {

    window.onload = init;

    function init() {

        const UL_DOM = document.querySelector('#userList')

        let index = 0

        for (; index < LOREM.LIST.length; index++) {
            if (LOREM_LIST[index] == 'dolor') { continue }
            let LI_DOM = document.createElement('li')
            LI_DOM.innerHTML = LOREM_LIST[index]
            UL_DOM.append(LI_DOM)

        }

    }
})(window, document, undefined);
