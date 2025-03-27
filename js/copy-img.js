async function copyCanvasContentsToClipboard() {
  const canvas = document.getElementById('canvas');

  if (!canvas) {
    console.error('Canvas element not found');
    return;
  }

  try {
    const blob = await new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Canvas to Blob conversion failed'));
        }
      }, 'image/png');
    });

    const item = new ClipboardItem({ "image/png": blob });
    await navigator.clipboard.write([item]);
    console.log('Canvas content copied to clipboard');
    openModal();
  } catch (error) {
    console.error('Failed to copy canvas content to clipboard:', error);
  }
}

function openModal() {
  const modal = document.getElementById("optionCopy");
  if (modal) {
    modal.style.visibility = "visible";
  } else {
    console.error('Modal element not found');
  }
}

function closeModal() {
  const modal = document.getElementById("optionCopy");
  if (modal && modal.style.visibility === "visible") {
    modal.style.visibility = "hidden";
  }
}