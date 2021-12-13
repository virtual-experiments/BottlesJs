import createBottlesCanvas from './bottlescanvas';
import BottleBoxesCanvas from './bottleboxescanvas';
import { h } from './util';

function justifyLeft(width: number, text: string): string {
    return text + ' '.repeat(Math.max(0, width - text.length));
}

function justifyRight(width: number, text: string): string {
    return ' '.repeat(Math.max(0, width - text.length)) + text;
}

function getPH(tanksLevel: number, temperature: number): string {
    const ph = (6.75 + Math.pow(tanksLevel - 0.5, 3)) * (20.0 + temperature) / 20.0;
    return justifyRight(5, ph.toFixed(2));
}

(async () => {
    let history = "";
    let bottlesCount = 0;
    let analysis = "";
    let sampleNumber = 0;
    let sampling = false;
    const counterLabel = h('span', ['Number of bottles in current sample: 0']);
    const resultsTextArea = h('textarea', {style: 'width: 100%; padding: 0; box-sizing: border-box', rows: 10, readonly: true});
    const historyTextArea = h('textarea', {style: 'width: 100%; padding: 0; box-sizing: border-box; display: none', rows: 50, readonly: true});
    function updateCounterLabel() {
        counterLabel.innerText = 'Number of bottles in current sample: ' + bottlesCount;
        bottleBoxesCanvas.setBottlesCount(bottlesCount);
    }
    function startNewAnalysis() {
        bottlesCount = 0;
        updateCounterLabel();
        sampling = true;
        ++sampleNumber;
        resultsTextArea.value = '';
        analysis = 'Analysis of sample number ' + sampleNumber + '\n';
        analysis += 'Bottle   pH\n';
    }
    const bottlesCanvas = await createBottlesCanvas({
        bottleClicked(tanksLevel, temperature) {
            if (sampling) {
                ++bottlesCount;
                analysis += justifyLeft(9, bottlesCount.toString());
                analysis += getPH(tanksLevel, temperature);
                analysis += '\n';
                updateCounterLabel();
                analyzeButton.disabled = false;
            }
        }
    });
    const bottleBoxesCanvas = new BottleBoxesCanvas();
    startNewAnalysis();
    const analyzeButton = h('button', {style: 'width: 100%; height: 100%'}, [h('span', ['Analyze'])]);
    analyzeButton.onclick = () => {
        history += analysis + '\n';
        historyTextArea.value = history;
        resultsTextArea.value = analysis;
        analyzeButton.disabled = true;
        sampling = false;
    };
    const counterPanel = h('table', [
        h('tr', [h('td', {colspan: 2}, [counterLabel])]),
        h('tr', [
            h('td', [bottleBoxesCanvas.element]),
            h('td', {style: 'height: 100%'}, [analyzeButton])
        ])
    ]);
    const topPanel = h('table', [
        h('tr', [h('td', {align: 'center'}, [bottlesCanvas])]),
        h('tr', [h('td', [counterPanel])])
    ]);
    const historyButton = h('button', ['History']);
    historyButton.onclick = () => {
        if (historyTextArea.style.display === 'none')
            historyTextArea.style.display = 'inline';
        else
            historyTextArea.style.display = 'none';
    };
    const newSampleButton = h('button', ['New Sample']);
    newSampleButton.onclick = () => {
        startNewAnalysis();
    };
    const buttonsPanel = h('table', {width: '100%'}, [
        h('tr', [
            h('td', {width: '50%', align: 'center'}, [historyButton]),
            h('td', {width: '50%', align: 'center'}, [newSampleButton])
        ])
    ]);
    document.body.appendChild(h('table', [
        h('tr', [h('td', [topPanel])]),
        h('tr', [h('td', [resultsTextArea])]),
        h('tr', [h('td', [buttonsPanel])]),
        h('tr', [h('td', [historyTextArea])])
    ]));
})();