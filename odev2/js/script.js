
(function (window, document) {
    window.onload = init;

    function init() {

        let ltbDOM = document.querySelector('#liveToastBtn')
        let list_DOM = document.querySelector('#list')
        let task_DOM = document.querySelector('#task')
        let ul_li = document.getElementsByTagName('li')
        let counter = 0
        ltbDOM.addEventListener('click', notification)

        for (let i = 0; i < ul_li.length; i++) {
            new_element
            ul_li[i].append(event_close)
            ul_li[i].onclick = check
        }

        function new_element() {
            let event_close = document.createElement("span")
            event_close.textContent = "\u00D7"
            event_close.classList.add("close")
            event_close.onclick = remove
        }

        function check() {
            this.classList.toggle("checked")
        }

        function remove() {
            this.parentElement.remove()

        }

        function notification() {
            if (task_DOM.value == "") {
                $(".error").toast("show")

            } else {
                $(".success").toast("show")
                let liDOM = document.createElement('li')
                list_DOM.appendChild(liDOM)

                liDOM.id = counter += 1
                localStorage.setItem(counter, (task.value))
                liDOM.innerHTML = task.value
                task_DOM.value = ""

                liDOM.onclick = check
                let event_close = document.createElement("span")
                event_close.textContent = "\u00D7"
                event_close.classList.add("close")
                event_close.onclick = remove

                liDOM.append(event_close)
                list_DOM.append(liDOM)
                
            }
        }


    }
})(window, document, undefined);