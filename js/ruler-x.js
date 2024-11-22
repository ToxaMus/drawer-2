class RulerX {
    _context = document.getElementById("rulerX").getContext("2d");

    draw() {
        const width = 600;
        this._context.font = '12px Arial'

        for (let i = 50; i < width; i += 50) {
            if (i == 50) {
                this._context.fillText("|", i - 25, 15);
            }
            
            const numberToString = i.toString();
            this._context.fillText(numberToString, i - 7, 15)
            this._context.fillText("|", i + 25, 15);

        }
    }
}