class Plinko{
    constructor(x,y,r){
        var options={
            isStatic: true ,
            'friction':0 ,
            'resititution': 1
               };
    this.body = Bodies.circle(x,y,this.r,options);
    World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        stroke("white");
        fill("orange");
        imageMode(CENTER);
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r);
        pop();
    }  
}