class Drop{
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,radius);
        this.radius = radius;
        World.add(world, this.body);
    }
    update(){
        if(this.body.position.y>600){
            this.body.position.y = 0;
        }
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,pos.radius);
    }
}