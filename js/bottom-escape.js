class Escape {
    click(element, mark, array) {
        mark.enterOrEscape()
        array.lenght = 0
        
        const inputEl = element.querySelectorAll('input');
        inputEl.forEach((input) => {
            input.value = ""
        })
    }
}