window.onload = function() {
    let tlacitko = document.getElementById("tlacitko");
    let cislo1 = document.getElementById("cislo1");
    let cislo2 = document.getElementById("cislo2");
    let tlacitko2 = document.getElementById("tlacitko2");
    let cislo3 = document.getElementById("cislo3");
    let cislo4 = document.getElementById("cislo4");
    let tlacitko3 = document.getElementById("tlacitko3");
    let cislo5 = document.getElementById("cislo5");
    let cislo6 = document.getElementById("cislo6");
    let tlacitko4 = document.getElementById("tlacitko4");
    let cislo7 = document.getElementById("cislo7");
    let cislo8 = document.getElementById("cislo8");

    tlacitko.addEventListener("click", function() {
        alert(parseFloat(cislo1.value) + parseFloat(cislo2.value));
    });
    tlacitko2.addEventListener("click", function() {
        alert(parseFloat(cislo3.value) - parseFloat(cislo4.value));
    });
    tlacitko3.addEventListener("click", function() {
        alert(parseFloat(cislo5.value) * parseFloat(cislo6.value));
    });
    tlacitko4.addEventListener("click", function() {
        alert(parseFloat(cislo7.value) / parseFloat(cislo8.value));
    });
}
