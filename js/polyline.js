class Polyline {
    _color = 'black';

    constructor(points, figure) {
        this._vertices = points;
        this._type = figure
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

    get type() {
        return this._type
    }

    draw(ctx) {
        ctx.moveTo(this.firstPoint.x, this.firstPoint.y)
        
        ctx.beginPath();
        ctx.strokeStyle = this._color;
        this.vertices().forEach(each => {
            ctx.lineTo(each.x, each.y)
            each.draw(ctx)
        });

        if (this.type == "triangle")  {
            ctx.closePath()
        }

        ctx.stroke();
    }
}