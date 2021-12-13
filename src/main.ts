import createBottlesCanvas from './bottlescanvas';
import BottleBoxesCanvas from './bottleboxescanvas';
import { h } from './util';

(async () => {
    let bottlesCount = 0;
    const bottlesCanvas = await createBottlesCanvas({
        bottleClicked(tanksLevel, temperature) {
            bottleBoxesCanvas.setBottlesCount(++bottlesCount);
        }
    });
    const bottleBoxesCanvas = new BottleBoxesCanvas();
    const analyzeButton = h('button', {'style': 'width: 100%; height: 100%'}, [h('span', {}, ['Analyze'])]);
    document.body.appendChild(h('table', {}, [
        h('tr', {}, [h('td', {}, [bottlesCanvas])]),
        h('tr', {}, [
            h('td', {}, [
                h('table', {}, [
                    h('tr', {}, [
                        h('td', {}, [bottleBoxesCanvas.element]),
                        h('td', {'style': 'height: 100%'}, [analyzeButton])
                    ])
                ])
            ])
        ])
    ]));
})();