class Reference {
    visiblity() {
        document.getElementById('reference').style.visibility = "visible";
    }

    video(type) {
        const video = document.getElementById("video")
        const source = document.getElementById("source") 
        
         if(type == "line") {
            source.setAttribute("src", "./видеозаписи/ломаная.mp4")
        } else if(type == "circle") {
            video.setAttribute("src", "./видеозаписи/Круг.mp4")
        } else if(type == "tetrahedron") {
            video.setAttribute("src", "./видеозаписи/тетраэдр.mp4")
        } else if(type == "triangle") {
            video.setAttribute("src", "./видеозаписи/треугольник.mp4")
        } else if(type == "rubber") {
            video.setAttribute("src", "./видеозаписи/резинка.mp4")
        } else if(type == "rhombus") {                                              
            video.setAttribute("src", "./видеозаписи/прямоуголник.mp4")
        } 
        video.load()
        video.play()
    }
}   