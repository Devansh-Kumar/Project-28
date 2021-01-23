class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.04,
            length:55
        }
        this.pointB=pointB;
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
    cut()
    {
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA)
        {
         var pointA = this.sling.bodyA.position;
         var pointB = this.pointB;
        strokeWeight(1);
        line(pointB.x, pointB.y, pointA.x, pointA.y);
        }
    }
    
}