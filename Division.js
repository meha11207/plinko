class Division{
    constructor(x,y,w,h){
        var options={
            isStatic: true,
            'density': 1,
            'friction':0 ,
            'resititution': 5
               };
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
    }
    display(){
       var pos = this.body.position
        fill("white");
        rectMode(CENTER);
        rect(pos.x,this.body.pos.y,this.w,this.h);

    }  
}