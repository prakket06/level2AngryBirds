class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
    this.Visiblity = 255;
  }
  display(){
    if(this.body.speed < 5){
      super.display();
     }
     else if(keyCode == 78){
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      image(this.image, this.body.position.x, this.body.position.y, this.body.width, this.body.height,this.body.angle);
      pop();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, this.body.width, this.body.height,this.body.angle);
       pop();
     }
  }
  
}