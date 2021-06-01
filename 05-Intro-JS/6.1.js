class Circle {
        constructor (xPos, yPos, radius){
            this.xPos = xPos;
            this.yPos = yPos;
            this.radius = radius;
        }
        get surface(){
            return (Math.PI * this.radius * this.radius);
        }
        move(xOffset, yOffset) {
           this.xPos += xOffset
           this.yPos += yOffset
        }
    }
   
    let obj1 = new Circle(3,2,5);
    console.log(obj1);
    obj1.surface;
    console.log(obj1.surface);
    obj1.move(2, 3);
    console.log(obj1);