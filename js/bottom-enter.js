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
        this.сheckNumber(input)    
        input.value = '';

        if (this._point.length == 3 && figure != "circle" && figure != "rubber") {
            this.polygon.push({ label: this._point[0], x: this._point[1], y: this._point[2] })
            this._point = []
        } else if (this._point.length == 4) {
            if (figure == "circle") {
                this.polygon.push({ label: this._point[0], x: this._point[1], y: this._point[2], radius: this._point[3] })
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

                if (inputElement.getAttribute("id") == 'coordinate') {
                    const coord = inputValue.split(" ")

                    if (isNaN(parseFloat(coord[0])) || isNaN(coord[1])) {
                        throw new Error("Неверный ввод")
                    }

                    coord[0] = parseFloat(coord[0])
                    coord[1] = parseFloat(coord[1])

                    this._point.push(coord[0])
                    this._point.push(coord[1])
                } else {
                    inputValue = super.replace(inputValue)

                    if (isNaN(parseFloat(inputValue))) {
                        throw new Error("Неверный ввод")
                    }

                    this._point.push(parseFloat(inputValue))
                }
            } else {
                this._point.push(inputValue)
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
