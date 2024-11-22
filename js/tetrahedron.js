class Tetrahedron extends Polyline {
    constructor(point, type) {
        super(point, type)
        this._vertex = point;
    }

    get vertex() {
        return this._vertex
    }

    dettedLine(actx) {
        let firstPoint = this.vertex[0]
        let secondPoint = this.vertex[2]

        for (let i = 0; i + firstPoint.x < secondPoint.x; i += 10) {
            actx.beginPath();
            actx.moveTo(i + firstPoint.x, firstPoint.y);
            actx.lineTo(i + 5 + firstPoint.x, firstPoint.y);

            actx.closePath();
            actx.stroke();
        }
    }

    draw(ctx) {
        super.draw(ctx);

        const fourthVertex = this._vertex[3];
        let point;

        for (let i = 0; i < this._vertex.length - 1; i++) {
            ctx.beginPath();

            point = this._vertex[i];

            ctx.moveTo(fourthVertex.x, fourthVertex.y);
            ctx.lineTo(point.x, point.y);

            ctx.closePath()
            ctx.stroke()
        }
        this.dettedLine(ctx)
    }
}