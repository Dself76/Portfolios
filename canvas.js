/*Use this for referece to other projects
// Get the canvas element and its context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Load the image
const img = new Image();
img.src = '/images/python.png'; // Make sure the path matches where you store your image
img.onload = function() {
    // Draw the image onto the canvas
    ctx.drawImage(img, 10, 10, 200, 100); // Adjust size and position as needed

    // Add some text
    ctx.font = '24px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('Hello, this is a Python image!', 20, 350);
}
*/
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height= window.innerHeight;
var c = canvas.getContext('2d');
//c.fillRect has 4 arguments x,y width and height relative to the top left
c.fillStyle = 'rgba(255, 0, 0.1)';
c.fillRect(100, 100, 100, 100);
//fillstyle will take whatever prop is before it..
c.fillStyle = 'rgba(0, 0, 255,  0.5)';
c.fillRect(400, 100, 100, 100);
c.fillStyle = 'rgba(0,255, 0, 0.5)';
c.fillRect(300, 300, 100, 100);

 console.log

 //line
 c.beginPath();
 //move to takes x and y coord. but will be invisible until we ///call stroke var..so basically a starting point
 c.moveTo(50, 300);
 c.lineTo(300, 100);
 c.lineTo(400,300);
 c.lineTo(400,300);
 //c.strokeStyle = to any css
 c.strokeStyle= "#fa34a3";
 //call stroke below
 c.strokeStyle = 'blue';
 c.stroke();

 //Arc/ circle  startAngle: Float, drawcounterClockwise: Bool
 //this is just an outline cannot see yet until we storke look at khan acedamey for a radians refresher if i forget 
 //then I need a beginPath so the circle/arc isnt connected to anything
//c.beginPath();
//c.arc(300,300,30, 0, Math.PI * 2, false);
//c.stroke();

//To make multiple of something, we will use a for loop;
//but below will draw on top of each other, so the locations need to be different 
/*
for (var i = 0; i < 3; i++) {
    c.beginPath();
    c.arc(300, 300, 30, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();
}
    */
//this below will draw in in different locations..

for (var i = 0; i < 30; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x , y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();
}
