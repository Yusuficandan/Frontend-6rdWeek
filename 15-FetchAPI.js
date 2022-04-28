

(function (window, document, undefined) {

    window.onload = init;

    function init() {

        // JSON dosyasından veri cekme
        fetch("data/settings.json").then(
            response => {
                return response.json()
            }

        ).then(responseJson => {
            console.log(responseJson)
            console.log(responseJson.userName)
        })

        const userListDOM = document.querySelector('#userList')

        // API ile veri cektik
        fetch("https://jsonplaceholder.typicode.com/posts").then(
            response => response.json()
        ).then(responseJson => {
            responseJson.forEach(item => {
                let liDOM = document.createElement('li')
                liDOM.innerHTML = item.title
                userListDOM.appendChild(liDOM)

            });
        })


    }
})(window, document, undefined);