class Dustbin{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});
                                                                                            
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }
    display(){
        fill("white");
        var angle = this.body.angle;
        push();
        noStroke();
        translate(this.body.position.x, this.body.position.y-10);
        rotate(angle);

        rect(0,0,this.width,this.height);
        pop();
    }
}