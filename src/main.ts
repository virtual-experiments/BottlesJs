import createBottlesCanvas from './bottlescanvas';

(async () => {
    document.body.appendChild(await createBottlesCanvas());
})();