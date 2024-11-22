class ScaledY {
    scal(array) {
       for (let i=0; i < array.length; i++) {
            array[i].y = 600 - array[i].y
       }
    }
}