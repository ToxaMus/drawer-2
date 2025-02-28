async function copyCanvasContentsToClipboard() {
  const canvas = document.getElementById('canvas')

  canvas.toBlob(function (blob) {
    const item = new ClipboardItem({ "image/png": blob });
    navigator.clipboard.write([item]);
  });

  openModal()  
}

function openModal() {
  document.getElementById("optionCopy").style.visibility = "visible"
}

function closeModal() {
  const modalWindow = document.getElementById("optionCopy")

  if (modalWindow.style.visibility == "visible") {
    modalWindow.style.visibility = "hidden"
  }
} 