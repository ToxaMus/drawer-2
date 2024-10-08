preparation()
const geometryTypeElement = document.getElementById("geometryType");

const polygon = []
const enter = new Enter(polygon)
const form = document.getElementById('input');
let geometryType
const inputPoint = new InputPoint()
const focusElement = new FocusElement()

geometryTypeElement.addEventListener('change', () => {
    geometryType = geometryTypeElement.value;
    polygon.length = 0

    inputPoint.removeInput(form)
    inputPoint.choosingFigure(geometryType)
})

const context = document.getElementById("canvas").getContext("2d")
const scene = new Scene(context)
const scaledY = new ScaledY()
const marker = new MarkerPoint()
const escape1 = new Escape()

document.addEventListener('keyup', (event) => {
    marker.marker(form)

    if (event.code === "Escape") {
        polygon.length = 0
        escape1.click(form, marker)
        inputPoint.returnBorder(form)
        context.beginPath()
        focusElement.inpFocus()
    }

    if (event.code === 'Enter') {
        marker.enterOrEscape()

        enter.click(form, geometryType);
        scaledY.scal(polygon)

        figureDraw(geometryType, polygon, scene)
        scaledY.scal(polygon)
        focusElement.inpFocus()
    }

    focusElement.limit(event)
});
