function figureDraw(type, matrix, ctx) {
    let figure;

    if (type == "circle" || type == "rubber") {
        const array = matrix[0];

        if (type == "circle") {
            figure = new Circle(new Point(array.label, array.x, array.y), array.radius)
        } else {
            figure = new Rubber([array.x, array.y], array.width, array.height)
        }

    } else {
        const points = matrix.map(each => new Point(each.label, each.x, each.y))
        
        if (geometryType == "triangle") {
            figure = new Triangle(points, geometryType)
        } else if (geometryType == "tetrahedron") {
            figure = new Tetrahedron(points, geometryType)
        } else {
            figure = new Polyline(points, geometryType)
        }
    }

    if (type != "line") {
        matrix.length = 0
    }

    ctx.addShape(figure)
    ctx.draw()

}