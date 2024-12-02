class Circle {
    constructor(center, radius) {
        this._center = center;
        this._radius = radius
    }

    get center() {
        return this._center
    }

    set color(value){
        this._color = value
    }

    get radius() {
        return this._radius
    }

    draw(ctx) {
        ctx.strokeStyle = this._color;
        ctx.beginPath();

        this.center.draw(ctx)
        ctx.closePath();
        ctx.beginPath();
        
        ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();
    }
}