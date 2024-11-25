class Reference {
    visiblity() {
        document.getElementById('reference').style.visibility = "visible";
    }

    addVideo(type) {
        const video = document.getElementById("video");
        const iframe = document.createElement('iframe');

        iframe.width = "400"
        iframe.height = "300"
        iframe.allowFullscreen = "1"
        iframe.allow = "autoplay; encrypted-media; fullscreen; picture-in-picture"


        if (type == "line") {
            iframe.setAttribute("src", "https://vk.com/video_ext.php?oid=5885804&id=456240042&hash=a4d10ef97efcaa9f")
        } else if (type == "circle") {
            iframe.setAttribute("src", "https://vk.com/video_ext.php?oid=5885804&id=456240040&hash=b6aa2360364b1e96")
        } else if (type == "tetrahedron") {
            iframe.setAttribute("src", "https://vk.com/video_ext.php?oid=5885804&id=456240045&hash=4667c68d54445270")
        } else if (type == "triangle") {
            iframe.setAttribute("src", "https://vk.com/video_ext.php?oid=5885804&id=456240046&hash=34d6db5f98705408")
        } else if (type == "rubber") {
           iframe.setAttribute("src", "https://vk.com/video_ext.php?oid=5885804&id=456240043&hash=e3e91ead32f65584")
        } else if (type == "rhombus") {
            iframe.setAttribute("src", "https://vk.com/video_ext.php?oid=5885804&id=456240041&hash=f03d62e46498a946")
        }

        video.appendChild(iframe)
    }

    delVideo() {
        document.getElementById("video").innerHTML = ""
    }  
}   