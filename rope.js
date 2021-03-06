class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY) {
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 1,
            length : 76,
            pointB : {x:this.offsetX, y:this.offsetY}
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }

    display() {
        strokeWeight(4);
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);

    }
}