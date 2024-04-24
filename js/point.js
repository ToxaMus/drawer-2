class Point {   
    constructor(label, x, y) {
        this._label = label;
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    get label() {
        return this._label;
    }

    draw(ctx) {
        ctx.arc(this.x, this.y, 1, 0, 2 * Math.PI);
        ctx.fillText(this.label, this.x -3, this.y - 5)                                      
    }
}