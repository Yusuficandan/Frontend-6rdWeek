
(function (window, document, undefined) {

    window.onload = init;

    function init() {

        let items = [1, 2, 3, 4, 5]

        let femaleUsers = ["Ayse", "Hulya", "Merve"]
        let maleUsers = ["Ahmet", "Hasan", "Mehmet"]

        items.unshift(femaleUsers)

        items.push(maleUsers)

        console.log(items)

        console.log(items.length)
        console.log(items[0].length) // Array icindeki istedigimiz Array'in length bilgisini aldik
        console.log(items[0][0]) // Ayse bilgisine ulastik :)

        // Array icerisindeki ogeleri ayirmak

        let newItems = items.splice(1, 5)
        console.log("Splice: ", newItems)

        // Array icerisindeki ogenin indexini bulmak
        items.unshift("lorem")
        items.push("ipsum")

        console.log(items[items.indexOf("ipsum")])

        // Array Kopyalamak -> slice, [...ES6]
        let copyItems = items
        console.log(items)

        copyItems.pop()
        console.log("copyItems: ", copyItems, " items: ", items)


        copyItems=items.slice()
        copyItems.pop()
        console.log("copyItems: ", copyItems)
        console.log("items:", items)

        //es6 ve sonrasinda gelene kopyalama islemi
        let es6Items =[...items]
        console.log(es6Items)

        //es6 birden fazla array yapisini birlestirmek
        let allUsers=[...femaleUsers, ...maleUsers]
        console.log(allUsers)

        //Array icerisindeki bilgiyi String'e cevirmek ->toString
        console.log(allUsers.toString())
        console.log(allUsers.join(" --- "))

        // Istedigimiz index bilgisine oge eklemek -> splice(index,0,value)
        allUsers.splice(allUsers.length,0,"Melissa")
        allUsers.splice(Math.floor(allUsers.length/2),0,"Lorem")
        console.log(allUsers)

        // .includes() -> bir elemanin dizi icerisinde bulundugunu kontrol eder

        

    }
})(window, document, undefined);

