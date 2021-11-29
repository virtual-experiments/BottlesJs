function loadImage(url) {
    let imgElement = document.createElement('img');
    imgElement.src = url;
    imgElement.style.display = 'none';
    document.body.appendChild(imgElement);
    return new Promise<HTMLImageElement>((resolve, reject) => imgElement.onload = () => { resolve(imgElement); });
}
const waterTankLeft = 26;
const tanksY = 59;
const waterTankRight = 35;
const tanksHeight = 76;
const co2TankLeft = 192;
const co2TankRight = 203;
const bottleY = 193;
const bottleXEntry = 34;
const bottleXFilled = 113;
const bottleXExit = 516;
const bottlesDistance = 60;
const bottleSpeed = 10; // In milliseconds per pixel.
const tanksSpeed = 1000; // In milliseconds per pixel.
const thermometerLeft = 381;
const thermometerTop = 16;
const thermometerRight = 386;
const thermometerBottom = 103;
const thermometerSpeed = 5000; // In milliseconds per pixel.

(async () => {
    const bottlesCanvas = document.getElementById('bottlesCanvas') as HTMLCanvasElement;
    const backgroundImage = await loadImage('background.gif');
    const emptyBottleImage = await loadImage('emptybottle.gif');
    const filledBottleImage = await loadImage('filledbottle.gif');
    const ctxt = bottlesCanvas.getContext('2d');
    const startTimeMillis = Date.now();
    setInterval(paint, 100);
    function paint() {
        ctxt.drawImage(backgroundImage, 0, 0);
        const millis = Date.now();
        const dt = millis - startTimeMillis;
        const firstBottleX = bottleXEntry + dt / bottleSpeed;
        let x = bottleXEntry + dt / bottleSpeed % bottlesDistance;
        while (x < bottleXExit && x <= firstBottleX) {
            const image = x < bottleXFilled ? emptyBottleImage : filledBottleImage;
            ctxt.drawImage(image, x, bottleY);
            x += bottlesDistance;
        }
    }
})();
