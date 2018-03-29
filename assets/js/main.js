$(function () {
    var $fns = ('#fns'),
        fns = $.fn
    Object.keys(fns).forEach(function (key) {
        $('<li/>').text(key).appendTo($fns)
    })
})