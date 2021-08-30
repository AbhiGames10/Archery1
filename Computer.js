class Computer{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }

        this.w = w;
        this.h = h;

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.image = loadImage("./assets/player.png");
        World.add(world,this.body);
    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
        pop();
    }
}