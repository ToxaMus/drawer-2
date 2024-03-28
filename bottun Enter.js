class Enter extends CommaDot {
    _point = []
    count = 0

    constructor(pointArray) {
        super()
        this._array = pointArray
    }

    get array() {
        return this._array
    }

    addPoint(input, figure) {
        //debugger
        if (this._point.length == 3 && figure != "circle" && figure != "rubber") {
            this.array.push({label: this._point[0], x: this._point[1], y: this._point[2]})
            this._point = []
        } else if (this._point.length == 4) {
            if (figure == "circle") {
                this.array.push({label: this._point[0], x: this._point[1], y: this._point[2], radius: this._poin[3]})
            } else {
                this.array.push({x: this._point[0], y: this._point[1], with: this._point[2], height: this._point[3]}) 
            }
            this._point = []
        } else {
            this._point.push(this.сheckNumber(input))
            input.value = '';
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
            this.count = 0
            this._point = []
            this.array = []
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
