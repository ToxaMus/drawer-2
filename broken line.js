class BrokenLine {
    _color = 'black';

    constructor(points) {
        this._vertices = points;
    }


    set color(value) {
        this._color = value
    }

    vertices() {
        return this._vertices
    }

    get firstPoint() {
        return this._vertices[0]
    }

    draw(ctx) {
        ctx.strokeStyle = this._color;

        ctx.beginPath();
        ctx.moveTo(this.firstPoint.x, this.firstPoint.y)

        this.firstPoint.draw(ctx)

        this.vertices().forEach(each => {
            ctx.lineTo(each.x, each.y)
            each.draw(ctx)
        });

        ctx.closePath();
        ctx.stroke();

    }
}