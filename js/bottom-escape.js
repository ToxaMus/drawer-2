class Escape {
        click(element, mark) {
        mark.enterOrEscape()
               
        const inputEl = element.querySelectorAll('input');
        inputEl.forEach((input) => {
            input.value = ""
        })
    }
}