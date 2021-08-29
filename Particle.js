class Particle{
    constructor(x,y,r){
        var options={
            'resititution': 0.4
               };
    this.body = Bodies.rectangle(x,y,this.r,options);
    this.colour=colour(random(0,255),random(0,255),random(0,255))
    World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.colour);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }  
}