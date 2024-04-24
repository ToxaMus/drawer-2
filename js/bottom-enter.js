class Enter extends CommaDot {
    _point = []

    constructor(pointArray) {
        super()
        this._array = pointArray
    }

    get polygon() {
        return this._array
    }

    addPoint(input, figure) {
        this._point.push(this.сheckNumber(input))
        input.value = '';

        if (this._point.length == 3 && figure != "circle" && figure != "rubber") {
            this.polygon.push({ label: this._point[0], x: this._point[1], y: this._point[2]})
            this._point = []
        } else if (this._point.length == 4) {
            if (figure == "circle") {
                this.polygon.push({ label: this._point[0], x: this._point[1], y: this._point[2], radius: this._point[3]})
            } else {
                this.polygon.push({ x: this._point[0], y: this._point[1], width: this._point[2], height: this._point[3] })
            }
            this._point = []
        }
    }

    сheckNumber(inputElement) {
        let inputValue = inputElement.value

        try {
            if (inputValue && inputElement.getAttribute('id') !== 'label') {
                inputValue = super.replace(inputValue)

                if (isNaN(parseFloat(inputValue))) {
                    throw new Error("Неверный ввод")
                }

                return parseFloat(inputValue)
            }

            return inputValue
        } catch (error) {
            this._point = []
            this.polygon.length = 0
            throw alert(error)
        }
    }

    click(element, type) {
        const inputEl = element.querySelectorAll('input');
        inputEl.forEach((input) => {
            this.addPoint(input, type)
        });
    }
}
