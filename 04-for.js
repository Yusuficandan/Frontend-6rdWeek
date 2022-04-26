
(function (window, document, undefined) {

    window.onload = init;

    function init() {

        let users=["Lorem","Ipsum","Dolor"]

        const userListDOM=document.querySelector('#userList')

        for (index=0; index<users.length; index++){
            const lidom=document.createElement('li')
            lidom.innerHTML=users[index]
            userListDOM.appendChild(liDOM)
        }

        
    }
})(window, document, undefined);
