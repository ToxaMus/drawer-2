async function copyCanvasContentsToClipboard() {    
    const blob = await new Promise((resolve) => {
        canvas.toBlob(resolve, 'image/png');
      });

  const data = [new ClipboardItem({ [blob.type]: blob })];

  await navigator.clipboard.write(data)
  
  alert("Изображение скопировано")
}

    