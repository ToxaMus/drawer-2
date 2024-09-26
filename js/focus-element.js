class FocusElement {
    inpFocus() {
        const inputs = document.getElementsByTagName("input")
        inputs[0].focus()
    }

    count = 0

    limit(event) {

        if (
            (
                event.which == 9 &&
                !event.shiftKey &&
                document.activeElement.id == "copy") || (
                event.which == 9 &&
                event.shiftKey &&
                document.activeElement.id == "geometryType")) {
            event.preventDefault();
        }

    }
}