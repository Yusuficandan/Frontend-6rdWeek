

(function (window, document, undefined) {

    window.onload = init;

    function init() {

        let items = [10, 20, 30, 40,]
        console.log("items - ilk hali: ", items)

        // Array: sona oge/eleman eklemek -> push
        items.push(50)
        console.log("50 :", items)

        // Array: basa oge eklemek -> unshift
        items.unshift(5)
        console.log("5 : ", items)

        // Array: sondaki ogeyi cikarmak -> pop

        let lastItem = items.pop()
        console.log("lastItem: ", lastItem," items:", items)

        // Array: ilk elemanı cikarmak 
        let firstItem = items.shift()
        console.log("firstItem: ", firstItem," items:", items)

        // Array icindeki bir ogenin bilgilerini degistirme
        items[0]=5
        console.log("Guncel: ",items)

        //sonuncu ogenin degistirilmesi
        items[length-1]=1000
        console.log(items)


    }
})(window, document, undefined);

