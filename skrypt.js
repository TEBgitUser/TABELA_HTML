var mouseElements = document.getElementsByClassName("mouse");
for (var i = 0; i < mouseElements.length; i++) {
    mouseElements[i].onmouseover = function() {
        this.style.fontSize = "200%";
    };
    mouseElements[i].onmouseout = function() {
        this.style.fontSize = "100%";
    };
}