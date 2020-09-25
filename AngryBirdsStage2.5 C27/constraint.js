class ConstraintChain{
    constructor(obj1,obj2){
        var options={
            bodyA:obj1,
            bodyB:obj2,
            stiffness:0.4,
            length:10

        }
        this.constraint=Constraint.create(options); 
        World.add(world,this.constraint );

        
      }
      display(){
      line(this.constraint.bodyA.position.x,this.constraint.bodyA.position.y,this.constraint.bodyB.position.x, 
        this.constraint.bodyB.position.y);
      }

      
}