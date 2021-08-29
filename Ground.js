class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic: true,
            'density': 1,
            'friction':0 ,
            'resititution': 5
               };
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    }
    display(){
       var pos = this.body.position
        fill(225);
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);

    }  
}