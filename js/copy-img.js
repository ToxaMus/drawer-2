
const canvas = document.getElementById("canvas");

async function copyCanvasContentsToClipboard() {
  // Copy canvas to blob
  const blob = await canvas.toBlob();
  // Create ClipboardItem with blob and it's type, and add to an array
  const data = [new ClipboardItem({ [blob.type]: blob })];
  // Write the data to the clipboard
  await navigator.clipboard.write(data);
}
const button = document.querySelector("button")

button .addEventListener('click', copyCanvasContentsToClipboard())
