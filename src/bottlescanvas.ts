function loadImage(url) {
    let imgElement = document.createElement('img');
    imgElement.src = url;
    imgElement.style.display = 'none';
    document.body.appendChild(imgElement);
    return new Promise<HTMLImageElement>((resolve, reject) => imgElement.onload = () => { resolve(imgElement); });
}
const waterTankLeft = 26;
const tanksY = 55;
const waterTankRight = 38;
const tanksHeight = 133-55;
const co2TankLeft = 190;
const co2TankRight = 203;
const bottleY = 193;
const bottleXEntry = 34;
const bottleXFilled = 113;
const bottleXExit = 516;
const bottlesDistance = 60;
const bottleSpeed = 10; // In milliseconds per pixel.
const tanksSpeed = 1000; // In milliseconds per pixel.
const thermometerLeft = 375.5;
const thermometerTop = 16;
const thermometerRight = 383.25;
const thermometerBottom = 91;
const thermometerSpeed = 5000; // In milliseconds per pixel.

export default async function createBottlesCanvas() {
    const bottlesCanvas = document.createElement('canvas');
    bottlesCanvas.width = 593;
    bottlesCanvas.height = 300;
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
        ctxt.fillStyle = 'blue';
        const tanksLevel = dt / tanksSpeed % (tanksHeight + 1);
        ctxt.fillRect(waterTankLeft, tanksY + tanksLevel, waterTankRight - waterTankLeft, tanksHeight - tanksLevel);
        ctxt.fillStyle = 'gray';
        ctxt.fillRect(co2TankLeft, tanksY + tanksLevel, co2TankRight - co2TankLeft, tanksHeight - tanksLevel);
        ctxt.fillStyle = '#da251d';
        const thermLevel = Math.max(thermometerTop,
            thermometerBottom - 50 - dt / thermometerSpeed);
        ctxt.fillRect(thermometerLeft, thermLevel,
            thermometerRight - thermometerLeft, thermometerBottom - thermLevel);
    }
    return bottlesCanvas;
}
