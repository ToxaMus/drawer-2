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

    undoShape(cnv, arr) {
        if (this._shapes.length > 0) {
            context.clearRect(0, 0, cnv.width, cnv.height);
    
            const img = new Image(cnv.width, cnv.height)
                 
            img.onload = () => context.drawImage(img, 0, 0)
            img.src = this._shapes[this._shapes.length - 1]
            this.removeShape()
            this.draw()

            if (arr.length != 0) {
                arr.pop()
            }
        }
    }
}
         