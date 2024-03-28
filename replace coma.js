class CommaDot {
    replace(text) {
        for (let i = 0; i <= text.length; i++) {
            if (text[i] == ",") {
                text = text.replace(",", ".")
            }
        }
        return text
    }
}