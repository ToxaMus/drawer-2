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
        ctx.beginPath()
        ctx.arc(this.x, this.y, 1, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.closePath()

        ctx.beginPath()
        ctx.fillText(this.label, this.x -3, this.y - 5)
        ctx.stroke();
    }
}