

(function (window, document, undefined) {

    window.onload = init;

    function init() {


        let domain = "kodluyoruz"
        let isActive = false

        let items = [1, 2, 3, isActive, domain]

        console.log(items)

        let emptyArray = []

        console.log(items.length)

        document.querySelector('#info').innerHTML = items.length

        // - > array icindeki son elemana ulastik
        console.log(items[items.length - 1]) 

        // - > array icindeki ortadaki elemanin cagirilmasi
        console.log(
            "ortadaki: ",
            items[Math.floor(items.length/2)]
        )

        // type - > object olarak gozukuyor
        console.log(typeof (items)) 

        // -> array olup olmadigini kontrol etme 
        console.log("[] : ", Array.isArray([])) 
        console.log("1: ", Array.isArray(1))
        console.log("true: ", Array.isArray(true))



    }
})(window, document, undefined);
