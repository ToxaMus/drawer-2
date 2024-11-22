class RulerY {
    _context = document.getElementById("rulerY").getContext("2d");

    draw() {
        const height = 600;
        this._context.font = '12px Arial'

        for (let i = 50; i < height; i += 50) {
            const numberToString = i.toString();

            if (i == 50) {
                this._context.fillText("–", 15, height - 25);
                this._context.fillText(numberToString, 12, (height - i));
            } else {
                this._context.fillText(numberToString, 8, (height - i));
            }

            this._context.fillText("–", 15, height - (i + 25));
        }
    }
}