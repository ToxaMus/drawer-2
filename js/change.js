class Change {
    undoArr = []

    pushChange(cnvs) {
        this.undoArr.push(cnvs.toDataURL())
    }
}