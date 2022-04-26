
(function (window, document, undefined) {

    window.onload = init;

    function init() {
        const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"]

        const NEW_USERS = USERS.map(user => user.toLowerCase())

        console.log(NEW_USERS)

        const USERS_OBJECT = USERS.map(item =>
        (
            {
                userName: item, shortName: `${item[0]}`,
                newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
            }
        )
        )

        console.log(USERS_OBJECT)
    }
})(window, document, undefined);