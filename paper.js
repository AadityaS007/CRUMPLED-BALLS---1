class Paper {
    constructor(x, y, r) {


        var options = {
            restitution: 0.3,
            friction: 0.5,
            density: 1.2,
            isStatic: false

        }

        this.body = Bodies.circle(x, y, r, options);
        this.radius = r;
        World.add(world, this.body);
    }
    display() {
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
}