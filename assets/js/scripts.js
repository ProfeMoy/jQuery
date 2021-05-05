/*$(document).ready(() => {
    console.log("Ready");
});*/
$(".notification").hide();
var shown = false;

/*$("#showRed").hover(() => {
    if (shown == true) {
        $(".cuadro").slideDown();
    } else if (shown == false) {
        $(".cuadro").slideUp();
    }
    shown = !shown;
});*/


$("#animateElements").click(() => {
    $(".cuadro").animate({
        left: '+=250px',
        height: '500px',
        width: '500px',
        borderRadius: '50%'
    }, "fast");
    $(".cuadro").removeClass("rojo");
    $(".cuadro").addClass("verde");
});

$("section").scroll(() => {
    $("span").css("display", "inline").fadeOut("slow");
});

$(window).resize(() => {
    $("#rezise").fadeIn("slow");
    setTimeout(() => {
        $("#rezise").fadeOut("slow");
    }, 2000)
})

$("#textBox").keydown(() => {
    $("#kdNotification").fadeIn("fast");
    $("#kdNotification").fadeOut("fast");
});

$("#textBox").keypress(() => {
    $("#kpNotification").fadeIn("fast");
    $("#kpNotification").fadeOut("fast");
});


$("#textBox").keyup(() => {
    $("#kuNotification").fadeIn("fast");
    $("#kuNotification").fadeOut("fast");
});

$(window).contextmenu(() => {
    $("#contextMenuNotification").fadeIn("slow");
    $("#contextMenuNotification").fadeOut("slow");
});

$(".cuadro").hover(

    () => {
        $("#hoverInNotification").fadeIn("slow");
        $("#hoverInNotification").fadeOut("slow");
    },
    () => {
        $("#hoverOutNotification").fadeIn("slow");
        $("#hoverOutNotification").fadeOut("slow");
    }

);

$(".cuadro").dblclick(() => {
    $("#doubleClickNotification").fadeIn("slow");
    $("#doubleClickNotification").fadeOut("slow");
});

/*$(window).mousemove((event) => {

    $("#mouseMoveNotification").fadeIn("slow");
    $("#mouseMoveNotification").fadeOut("slow");

    var msg = "Handler for .mousemove() called at ";
    msg += event.pageX + ", " + event.pageY;
    $("#log").append("<div>" + msg + "</div>");
});*/


$("#input1").blur(() => {

    console.log($("#input1").val());

    var inputText = String($("#input1").val());

    if (inputText == "qqq") {
        $("#input1").addClass("inputGood");
        $("#input1").removeClass("inputBad");
        console.log("Sí");

    } else {
        $("#input1").addClass("inputBad");
        $("#input1").removeClass("inputGood");
        console.log("No");
    }

});