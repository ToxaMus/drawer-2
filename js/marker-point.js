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

        if (inputValue && inputElement.getAttribute('id') == "coordinate") {
            this._point = inputValue.split(" ")
            this.check(inputElement)
        }
    }

    check(element) {
        this.error(element)
        for (let index = 0; index < this._point.length; index++) {
            this._point[index] = super.replace(this._point[index])
            this._point[index] = parseFloat(this._point[index])

        }

    }

    error (el) {
        if (this._point.length > 2 || isNaN(this._point[0]) || isNaN(this._point[1])) {
            el.style.border = "4px solid red"
        } else {
            el.style.border = "1px solid black"
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
            this.rubber()

            this._ctx.beginPath()
            this._ctx.arc(this._point[0], 600-this._point[1], 2, 0, Math.PI * 2)
            this._ctx.fillStyle = "red"
            this._ctx.fill()
        }
    }

    rubber() {
        this._ctx.beginPath()
        this._ctx.clearRect(this.x - 2, 600-this.y - 2, 4, 4)
        this.x = this._point[0]
        this.y = this._point[1]

        this._ctx.stroke()
    }

    enterOrEscape() {
        this._ctx.clearRect(this.x - 2, this.y - 2, 4, 4)
        this._point.length = 0
    }
}
