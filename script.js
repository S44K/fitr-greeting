const canvas = document.getElementById('greetingCanvas');
const ctx = canvas.getContext('2d');
const baseImage = new Image();
baseImage.src = 'ITQAN_ramadan.jpeg';

const drawImageWithName = (name = '') => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.font = 'bold 36px Cairo';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.fillText(name, 650, 1100); // Fixed coordinates
};

baseImage.onload = () => {
  const name = document.getElementById('nameInput').value.trim();
  drawImageWithName(name);
  document.getElementById('loading-overlay').style.display = 'none';
};

document.getElementById('nameInput').addEventListener('input', e => {
  drawImageWithName(e.target.value);
});

const downloadImage = () => {
  const name = document.getElementById('nameInput').value.trim() || 'ramadan-greeting';
  const link = document.createElement('a');
  link.download = `${name}.png`;
  link.href = canvas.toDataURL();
  link.click();
};