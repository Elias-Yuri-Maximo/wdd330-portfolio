var canvas = document.getElementById("myCanvas");

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.strokeStyle = "red";
context.fillStyle = "blue";
context.fillStyle = "rgba(0, 0, 255, 0.5)";
context.fillRect(10, 10, 100, 100);   
context.strokeRect(10, 10, 100, 100);

//This creates a little pattern on thye rectangle
function drawPattern() {
    var canvas = document.getElementById("demo2");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";

    var img = new Image(); 
    img.src = "../images/bg-bike.png";
    
    img.onload = function() {    
        var pattern = context.createPattern(img, "repeat");
        context.fillStyle = pattern;                            
        context.fillRect(10, 10, 100, 100); 
        context.strokeRect(10, 10, 100, 100); 
    }; 
}
//This creates a gradient on the rectangle 
function drawGradient() {
    var canvas = document.getElementById("demo3");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    var gradient = context.createLinearGradient(0, 0, 0, 200); 
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(1, "white");
    context.fillStyle = gradient;
    context.fillRect(10, 10, 100, 100);
    context.strokeRect(10, 10, 100, 100); 

}

function drawCircle(canvas) {
    var context = canvas.getContext("2d");
    context.beginPath();
    context.beginPath();
    context.arc(50, 50, 30, 0, Math.PI*2, true);
    context.closePath(); 
    context.strokeStyle = "red";
    context.fillStyle = "blue"; 
    context.lineWidth = 3; 
    context.fill(); 
    context.stroke(); 
}

function saveDrawing() {    
    var canvas5 = document.getElementById("demo5");
    window.open(canvas5.toDataURL("image/png"));
}

var button = document.getElementById("saveButton");
button.addEventListener("click", saveDrawing, false);


window.addEventListener("load", drawImageToCanvas, false);

function drawImageToCanvas() {
    var canvas = document.getElementById("demo6");
    var context = canvas.getContext("2d");
    var image = document.getElementById("myImageElem");
}