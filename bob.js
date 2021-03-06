class Bob{
    constructor(x,y){
        var option= {
            'isStatic':false,
            'restitution': 0,
           'density': 1.2
           }
           this.body=Bodies.circle(x, y,50,option) ;
           World.add(world,this.body);
            //bobDiameter = 50;
           // bobDiameter = bob.radius;
    }

    display() {
          push ();
       translate (this.body.position.x,this.body.position.y);
       fill (239, 255, 99);
       ellipseMode(CENTER);
       ellipse(0,0,50);
       pop ();
    }

}