class car {
    constructor(weight,speed){
        this.x = 50
        this.y= 200
        
        this.weight = random(400,1500);
        this.speed = random(30,95);
        this.sprite.velocityX = random(10,20);
       

        this.display = function() {
            this.sprite.shapeColor = color(255);           
            this.sprite = createSprite(this.x,this.y,50,50);          }
    }

}