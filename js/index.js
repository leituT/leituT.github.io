$(function () {
    $(".nav li").on("mouseenter", function () {
        var l = $(this).position().left,
            w = $(this).outerWidth();
        $(".nav .line").stop(true).animate({ left: l, width: w }, 200);
    });
})