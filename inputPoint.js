class InputPoint {
    constructor(type) {
        this._figyre = type
    }

    addInput() {
        const div = document.querySelector("#input")
        const block = document.createElement("div")
        block.innerHTML =
            `
            <p>буква:</p>
            <input type="text" class="input">
            <p>x:</p>
            <input type="text" class="input">
            <p>y:</p>
            <input type="text" class="input">
        `

        div.appendChild(block)
    }

    addInputCircle() {
        const div = document.querySelector("#input")
        const block = document.createElement("div")
        block.innerHTML =
            `
            <p>буква:</p>
            <input type="text" class="input">
            <p>x:</p>
            <input type="text" class="input">
            <p>y:</p>
            <input type="text" class="input">
            <p>радиус:</p>
            <input type="text" class="input"> 
        `
        div.appendChild(block)
    }

    addInputRubber() {
        const div = document.querySelector("#input")
        const block = document.createElement("div")
        block.innerHTML =
            `
            <p>x:</p>
            <input type="text" class="input">
            <p>y:</p>
            <input type="text" class="input">
            <p>длина:</p>
            <input type="text" class="input">
            <p>ширина:</p>
            <input type="text" class="input"> 
        `
        div.appendChild(block)
    }

    choosingFigure() {
        if (this._figyre == "line" ) {
            this.addInput()
        }

        if (this._figyre == "rubber") {
            this.addInputRubber()
        }
        if (this._figyre == "circle") {
            this.addInputCircle()
        }

        if (this._figyre == "triangle") {
            for (let i = 1; i <= 3; i++) {
                this.addInput()
            }

            if (this._figyre == "tetrahedron" || this._figyre == "rhombus") {
                for (let i = 1; i <= 4; i++) {
                    this.addInput()
                }
            }
        }
    }

    removeInput() {
        const form = document.getElementById('input');
        const formChildren = form.children;

        for (let i = formChildren.length - 1; i >= 0; i--) {
            if (formChildren[i].tagName === 'DIV') {
                form.removeChild(formChildren[i]);
            }
        }
    }
}