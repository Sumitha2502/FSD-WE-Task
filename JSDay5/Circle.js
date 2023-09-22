//2)Convert the UML diagram to Typescript class

class Circle
{
    constructor(radius,color){
        this.r=radius
        this.c=color
    }
    Circle(){
        console.log("This is circle")
    }
    Circle(radius){
        console.log("method overriding")
    }
    Circle(radius,color){
        console.log(this.r,this.c+'final method overriding which accepts by javascripot')
    }
    getRadius(){
        console.log("Radius of the circle is "+ this.r)
    }
    setRadius(newRadius){
        this.r=newRadius
    }
    getColor(){
        console.log("Color of the circle is "+ this.c)
    }
    setColor(newColor){
        this.c=newColor
    }
    getArea(){
        console.log("Area of a circle is "+ (Math.PI*Math.pow(this.r,2)))
    }
    getCircumference(){
        console.log("Circumference of a circle is "+ (2*Math.PI*this.r))
    }
}
   
   let circle1=new Circle(2,"red")
   circle1.getRadius()
   circle1.setRadius(3)
   circle1.getColor()
   circle1.setColor("Purple")
   circle1.getArea()
   circle1.getCircumference()

   // Output:
   // Radius of the circle is 2
   // Color of the circle is red
   // Area of a circle is 28.274333882308138
   // Circumference of a circle is 18.84955592153876