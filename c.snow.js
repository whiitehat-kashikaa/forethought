class Snow {
    constructor(x,y) {
      var options = {
          friction : 1,
          density : 1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.width = 150;
      this.height = 150;
      this.image = loadImage("snow4.webp");


      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);

      if(frameCount % 5 === 0){
        if(pos.x > width || pos.y > height){
          Matter.Body.setPosition(this.body, {x : random(0 , 400) , y : random(0 , 400)});
        }
    }
    }
  }