class Box {
    
        constructor(){
            this.bin1=Bodies.rectangle(800,680,100,18,{isStatic:true})
            this.bin2=Bodies.rectangle(730,585,25,100,{isStatic:true})
            this.bin3=Bodies.rectangle(870,585,25,100,{isStatic:true})
            World.add(world,this.bin1)
            World.add(world,this.bin2)
            World.add(world,this.bin3)
            this.image = loadImage("box.png");
            }
            
        display(){
            rectMode(CENTER);
           
            fill("white");
            rect(this.bin1.position.x,this.bin1.position.y,100,20)
            rect(this.bin2.position.x,this.bin2.position.y,20,148)
            rect(this.bin3.position.x,this.bin3.position.y,20,148)
            imageMode(CENTER);
            image(this.image,800,600,180,180);
            }
    }

