class Triangle extends BrokenLine {
    constructor(points) {
        super(points)
        this._vertices = points
    }

    draw(ctx) {
        super.draw(ctx);
        ctx.closePath()
    }
}