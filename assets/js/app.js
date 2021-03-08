$(document).ready(function() {
    prueba1();
});
/*
function test() {
    console.log("Ola k ase?")
}*/

$("#verde").click(function() {
    $("#color").removeClass().addClass("bg-success");
    $("#texto").text("Verde");
    console.log("Verde");
});

$("#amarillo").click(function() {
    $("#color").removeClass().addClass("bg-warning");
    $("#texto").text("Amarillo");
    console.log("Amarillo");
});

$("#rojo").click(function() {
    $("#color").removeClass().addClass("bg-danger");
    $("#texto").text("Rojo");
    console.log("Rojo");
});

$("#imagen").click(function() {
    $("#color").removeClass().addClass("bgIMG");
    $("#texto").text("Imagen");
    console.log("Imagen");
});




function prueba1() {
    var x = "Ola k ase?";
    console.log(x);
    prueba2(x);
}

function prueba2(pepe) {
    console.log(pepe);
}