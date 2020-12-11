 class Ball {
    constructor(){
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(100,200,20,options);
        this.image = loadImage("paper.png");
        World.add(world,this.body)
        
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill("white")
          imageMode(CENTER);
          image(this.image,0,0,70,70);
        pop();
    }
}
