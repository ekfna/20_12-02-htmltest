$(document).ready(function () {

    DrawCircle()




})

function DrawCircle() {
    for (var i = 0; i < 1000; i++) {
        var windowWidth = $(window).width() * Math.random()
        var windowHeight = $(window).height() * Math.random()
        $(".circle-container").append("<div class='circle' style='left:" + windowWidth + "px;top:" + windowHeight + "px;'></div>")
    }

}