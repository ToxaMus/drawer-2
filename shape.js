class Shape {
    _vertices;
    _color = 'black';

    constructor(points) {
        this._vertices = points;
    }


    set color(value){
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

    drawPoint(ctx, aPoint) {
        ctx.arc(aPoint.x, aPoint.y, 1, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillText(aPoint.label, aPoint.x - 3, aPoint.y - 5)
    }
}