class Ground{
    constructor(){
        this.body=Bodies.rectangle(400,695,1200,15,{isStatic:true});
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("yellow");
        rect(this.body.position.x,this.body.position.y,1200,15)
    }
}
