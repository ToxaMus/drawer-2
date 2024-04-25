class MarkerPoint extends CommaDot {
    _point = []
    _ctx = document.getElementById("marker").getContext("2d")
    x = 0
    y = 0

    constructor() {
        super()
    }

    сonvertToNumber(inputElement) {
        let inputValue = inputElement.value

        if (!isNaN(parseFloat(inputValue)) && inputValue != undefined && inputValue && (inputElement.getAttribute('id') == 'inputX' || inputElement.getAttribute('id') == 'inputY')) {
            inputValue = super.replace(inputValue)

                if (inputElement.getAttribute('id') == 'inputX') {
                    this._point[0] = parseFloat(inputValue)
                }

                if (inputElement.getAttribute('id') == 'inputY') {
                    this._point[1] = 600-parseFloat(inputValue)
                }
        }
    }

    marker(element) {
        const inputEl = element.querySelectorAll('input');
        inputEl.forEach((input) => {
            this.draw(input)
        });
    }

    draw(inputEl) {
        this.сonvertToNumber(inputEl)

        if (this._point[0] != this.x || this._point[1] != this.y) {           
            this._ctx.beginPath()
            this._ctx.arc(this._point[0], this._point[1], 2, 0, Math.PI * 2)
            this._ctx.fillStyle = "red"
            this._ctx.fill()

            this.rubber()
        }
    }

    rubber() {
        this._ctx.beginPath()
        this._ctx.clearRect(this.x-2, this.y-2, 4, 4)
        this.x = this._point[0]
        this.y = this._point[1]

        this._ctx.stroke()
    }

    enterOrEscape() {
        this._ctx.clearRect(this.x-2, this.y-2, 4, 4)
        this._point.length = 0
    }
}
