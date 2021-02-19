
class Hands{

    constructor(bodyA, pointB){

        var options = {
            bodyA: bodyA,
            pointB: pointB,

            stiffness: 0.04,
            length: 10
        }

        this.hand1 = loadImage('Handhold.png');

        this.pointB = pointB
        this.hand = Constraint.create(options);
        World.add(world, this.hand);
    }
    attach(body){

        this.hand.bodyA = body;

    }
    
    fly(){

        this.hand.bodyA = null;

    }

    display(){

        image(this.hand1,200,20);
        
        if(this.hand.bodyA){
            var pointA = this.hand.bodyA.position;
            var pointB = this.pointB;

            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);              
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                
            }
           
            
            pop();
        }
    }
    
}