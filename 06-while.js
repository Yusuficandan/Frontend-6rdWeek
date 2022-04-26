
(function (window, document, undefined) {

    window.onload = init;

    function init() {

        let userName=""

        while(!userName) {
            userName=prompt("Kullanici Adini Giriniz: ")
            console.log(userName)
        }



    }
})(window, document, undefined);
