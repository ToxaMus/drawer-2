class Rubber {
    constructor(point, width, height) {
        this._vertex = point
        this._width = width;
        this._height = height;

    } 

    get vertex() {
        return  this._vertex
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    draw(ctx) {
        ctx.clearRect(this._vertex[0], this._vertex[1], this._width, -this._height);
    }
}
    