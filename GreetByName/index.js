
function init() {
    const greet_button = document.getElementById("greet_button")
    greet_button.onclick = ongreet_buttonclicked;

}
function ongreet_buttonclicked(){
    alert("Hiiii!!");
    }
window.onload = init;