async function copyCanvasContentsToClipboard() {
    
    const canvas = document.getElementById("canvas");
    const blob = await new Promise((resolve) => {
        canvas.toBlob(resolve, 'image/png');
      });

  const data = [new ClipboardItem({ [blob.type]: blob })];

  await navigator.clipboard.write(data);

    alert("Изображение скопировано")
}


/* 

const blob = await new Promise((resolve) => {
  canvas.toBlob(resolve, 'image/png');
});

const item = new ClipboardItem({ "image/png": blob });
navigator.clipboard.write([item]);
*/


