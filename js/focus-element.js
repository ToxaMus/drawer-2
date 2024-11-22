class FocusElement {
    inpFocus() {
        const inputs = document.getElementsByTagName("input")
        inputs[0].focus()
    }

    limit(btn) {
        if (btn.code == "Tab" && document.getElementById('modalWindow').style.visibility == "visible") {
            debugger
            document.getElementById("close").focus()
        } else {
            if (
                (
                    btn.which == 9 &&
                    !btn.shiftKey &&
                    document.activeElement.id == "copy"
                ) || (
                    btn.which == 9 &&
                    btn.shiftKey &&
                    document.activeElement.id == "start"
                )
            ) {
                btn.preventDefault();
            }
        }
    }
}