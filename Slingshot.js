class Slingshot{
    constructor(body1,body2){
        var option={
            bodyA:body1,
            bodyB:body2,
            length:10,
            stiffness:.04
        }
        this.sling=Constraint.create(option)
        World.add(world,this.sling)
    }
    display(){
        var point1=this.sling.bodyA.position
        var point2=this.sling.bodyB.position
        strokeWeight(3)
        line(point1.x,point1.y,point2.x,point2.y)
    }
}