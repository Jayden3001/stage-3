class Baseclass{
    constructor(x,y,w,h,a){
        var option={
            restitution:0.8,
            friction:1.5,
            denscity:1

        }
        this.image=loadImage("sprites/base.png")
        this.body=Bodies.rectangle(x,y,w,h,option)
        this.width=w
        this.height=h
        World.add(world,this.body)
    }

    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        fill("yellow")
        stroke("black")
        strokeWeight(2)
        //rectMode(CENTER)
       // rect(0,0,this.width,this.height)
      imageMode(CENTER)
      image(this.image,0,0,this.width,this.height)
        pop()
    }
}