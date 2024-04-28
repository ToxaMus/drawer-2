class InputPoint {
    addInput() {
        const div = document.querySelector("#input")
        const block = document.createElement("div")
        block.innerHTML =
            `
            <p>буква:</p>
            <input type="text" id="label" class="input">
            <p>координата:</p>
            <input type="text" id="coordinate">
        `

        div.appendChild(block)
    }

    addInputCircle() {
        const div = document.querySelector("#input")
        const block = document.createElement("div")
        block.innerHTML =
            `
            <p>буква:</p>
            <input type="text" id="label" class="input">
            <p>координата:</p>
            <input type="text" id="coordinate">
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
            <p>координата:</p>
            <input type="text" id="coordinate">
            <p>длина:</p>
            <input type="text" class="input">
            <p>ширина:</p>
            <input type="text" class="input"> 
        `
        div.appendChild(block)
    }

    choosingFigure(figure) {
        if (figure == "line") {
            this.addInput()
        }

        if (figure == "rubber") {
            this.addInputRubber()
        }
        if (figure == "circle") {
            this.addInputCircle()
        }

        if (figure == "triangle") {
            for (let i = 1; i <= 3; i++) {
                this.addInput()
            }
        }

        if (figure == "tetrahedron" || figure == "rhombus") {
            for (let i = 1; i <= 4; i++) {
                this.addInput()
            }
        }
    }

    removeInput(el) {
        const formChildren = el.children;

        for (let i = formChildren.length - 1; i >= 0; i--) {
            if (formChildren[i].tagName === 'DIV') {
                el.removeChild(formChildren[i]);
            }
        }
    }

    returnBorder(element) {
        const inputEl = element.querySelectorAll('input');
        inputEl.forEach((input) => {
            input.style.border = "1px solid black"
        });
    }
} 