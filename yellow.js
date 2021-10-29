function myFunction() {
    const x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
};

function changeBackground(color) {
    document.body.style.background = color;
}

window.addEventListener("load", function () { changeBackground('yellow') });