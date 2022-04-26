
(function (window, document, undefined) {

    window.onload = init;

    function init() {

        const PRODUCTS = ["laptop", "phone", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

        PRODUCTS.forEach((product, index, array) => array[index] = `${product.toUpperCase()}`)

        console.log(PRODUCTS)

        const userListDOM = document.querySelector('#userList')

        PRODUCTS.forEach(item => {
            const liDOM = document.createElement('li')
            liDOM.innerHTML = item
            userListDOM.append(liDOM)
        })

    }
})(window, document, undefined);

