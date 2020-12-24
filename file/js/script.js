$(document).ready(function (){
    let token = "05b3729167438908c47c454a0a1f501904940a8a";
    $(".address").suggestions({
        token: token,
        type: "ADDRESS",
        /* Вызывается, когда пользователь выбирает одну из подсказок */
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });
    $(".job").suggestions({
        token: token,
        type: "PARTY",
        /* Вызывается, когда пользователь выбирает одну из подсказок */
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });
    $(".fio").suggestions({
        token: token,
        type: "NAME",
        /* Вызывается, когда пользователь выбирает одну из подсказок */
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });
});