﻿// Class -->function Circle() {}
//Constructor patteren
function Circle(radius)
{
    this.radius = radius;
    this.getArea = getArea;
    this.getCircumference = getCircumference;
}
        //create Objcet
var bigCircle = new Circle(100);
var smallCircle = new Circle(2);


function getArea()
{
    return (this.radius * this.radius * 3.14);
}

function getCircumference()
{
    var diameter = this.radius * 2;
    var circumference = diameter * 3.14;
    return circumference;
}

alert(bigCircle.getArea()); 
alert(bigCircle.getCircumference());
alert(smallCircle.getArea()); 
alert(smallCircle.getCircumference());




/*
Prototype Pattern
Circle.prototype.radius
Circle.prototype.getArea
circle.prototype.getCircumference
*/
