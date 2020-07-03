class Umbrella{
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,radius);
        this.radius = radius;
        this.image = loadImage("BMU.jpg");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,pos.radius);
    }
}