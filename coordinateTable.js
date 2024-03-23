class CoordinateTable {
    _ctx = document.getElementById("coordinateTable").getContext("2d");

    xCoordinate() {
        for (let i = 0; i < 800; i += 50) {
            this._ctx.moveTo(i, 0);
            this._ctx.lineTo(i, 800);
            this._ctx.closePath();
        }
    }
        
    yCoordinate() {
        for (let i = 0; i < 800; i += 50) {
            this._ctx.moveTo(0, i);
            this._ctx.lineTo(800, i);
            this._ctx.closePath();
        }
    }    
    
    draw() {
        this._ctx.beginPath();
        this._ctx.strokeStyle = "#dfe2e8"
        this._ctx.lineWidth = 0.5;
        
        this.xCoordinate();
        this.yCoordinate();

        this._ctx.stroke()
    }
}