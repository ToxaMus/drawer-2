class Tetrahedron extends Shape {
    constructor(point) {
        super(point)
        this._vertex = point;
    }

    get vertex() {
        return this._vertex
    }
    
    draw(ctx) {
        super.draw(ctx);
    
        const fourthVertex = this._vertex[3];
        let point;

        for (let i = 0; i < this._vertex.length - 1; i++) {
            console.log(this._vertex[i])
            ctx.beginPath();

            point = this._vertex[i];

            ctx.moveTo(fourthVertex.x, fourthVertex.y);
            ctx.lineTo(point.x, point.y);

            ctx.closePath()
            ctx.stroke()
        }

        const firstPoint = this.vertex[0];
        const secondPoint = this.vertex[2];

        for (let i = 0; i + firstPoint.x < secondPoint.x; i +=10) {
            ctx.beginPath();
            ctx.moveTo(i+firstPoint.x, firstPoint.y);
            ctx.lineTo(i+5+firstPoint.x, firstPoint.y);
            ctx.closePath();
            ctx.stroke();
        }        
    }

} 