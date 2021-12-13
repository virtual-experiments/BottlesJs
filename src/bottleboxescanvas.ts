import { BottleImage } from './bottleimage';
import { h } from './util';

const padding = 2;

export default class BottleBoxesCanvas {
    element: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    bottlesCount: number;

    constructor() {
        this.element = h('canvas', {style: 'background-color: white'});
        this.element.width = (BottleImage.width + 2 * padding) * 15;
        this.element.height = BottleImage.height + 2 * padding;
        this.bottlesCount = 0;
        this.context = this.element.getContext('2d');
        this.context.fillStyle = 'white';
    }

    setBottlesCount(value: number) {
        this.bottlesCount = value;
        this.paint();
    }

    async paint() {
        this.context.clearRect(0, 0, this.element.width, this.element.height);
        const filledBottleImage = await BottleImage.filledBottleImage;
        for (let i = 0; i < this.bottlesCount; i++)
            this.context.drawImage(filledBottleImage, padding + i * (BottleImage.width + padding), padding);
    }
}