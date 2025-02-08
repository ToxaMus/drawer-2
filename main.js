preparation()
const geometryTypeElement = document.getElementById("geometryType");

const polygon = []
const enter = new Enter(polygon)
const form = document.getElementById('input');
let geometryType
const inputPoint = new InputPoint()
const reference = new Reference()

geometryTypeElement.addEventListener('change', () => {
    geometryType = geometryTypeElement.value;
    polygon.length = 0

    inputPoint.removeInput(form)
    inputPoint.choosingFigure(geometryType)
    reference.visiblity()
    reference.delVideo()
    reference.addVideo(geometryType)
})

const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")
const scene = new Scene(context)
const scaledY = new ScaledY()
const marker = new MarkerPoint()
const escape1 = new Escape()
const focusElement = new FocusElement()
const change = new Change()

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
        focusElement.inpFocus()
        marker.enterOrEscape()

        enter.click(form, geometryType);
        scaledY.scal(polygon)

        figureDraw(geometryType, polygon, scene)
        scaledY.scal(polygon)
        change.pushChange(canvas)
    }
});

function undoChange() {
    debugger
    if (change.undoArr.length > 1) {
        context.clearRect(0, 0, 600, 600);

        const img = new Image()
        img.src = change.undoArr[change.undoArr.length - 1]
        
        change.undoArr.pop()

        context.drawImage(img, 0, 0)
    }
}  