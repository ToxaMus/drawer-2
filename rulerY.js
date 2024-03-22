class RulerY {
    _context = document.getElementById("rulerY").getContext("2d");

    draw() {
        const height = 600;
        this._context.font = '14px Arial'

        for (let i = 50; i < height; i += 50) {
            if (i == 50) {
                this._context.fillText("–", 15, height - 25);
            }

            const numberToString = i.toString();

            this._context.fillText(numberToString, 5, (height - i))
            this._context.fillText("–", 15, height - (i + 25));

        }
    }
}