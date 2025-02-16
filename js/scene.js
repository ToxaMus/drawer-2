class Scene {
_shapes = [];

    constructor(aContext) {
        this._ctx = aContext
    }

    addShape(aShape) {
        this._shapes.push(aShape)
    }

    draw() {
        this._shapes.forEach(each => { each.draw(this._ctx) })
    }

    removeShape() {
        this._shapes.pop()
    }
}
         