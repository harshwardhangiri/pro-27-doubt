class Roof{
    constructor(x,y,width,height){
  var option = {
      isStatic:true
  }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
       
    }

    display(){
        push();
        var pos =this.body.position;
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}