 async function copyCanvasContentsToClipboard() {    
  const canvas = document.getElementById('canvas')

  canvas.toBlob(function(blob) { 
    const item = new ClipboardItem({ "image/png": blob });
    navigator.clipboard.write([item]); 
});

  alert("Изображение скопировано")
}

    