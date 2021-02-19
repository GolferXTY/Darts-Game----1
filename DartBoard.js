class Dartboard extends BaseClass {

    constructor(x, y, width, height){

      super(x,y,width,height);
      this.image = loadImage("Dartboard.png");

      this.x = x;
      this.y = y;
    }
  display(){

    image(this.image, this.x, this.y);
    
  }
  };
  