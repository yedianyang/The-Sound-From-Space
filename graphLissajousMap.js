let LissaGrapNumber = 20;

function createLissajousMap() {
    graphLissajousMap.background(0);

    graphLissajousMap.stroke(0, 180, 0, 100);
    graphLissajousMap.strokeWeight(2);
    for (let i = 0; i < LissaGrapNumber; i++) {
        let x = i * (graphLissajousMap.width / LissaGrapNumber);
        let y = i * (graphLissajousMap.width / LissaGrapNumber);
        graphLissajousMap.line(x, 0, x, graphLissajousMap.height);
        graphLissajousMap.line(0, y, graphLissajousMap.width, y);
    }


    let factors = [1 / 1, 2 / 1, 3 / 2, 4 / 3, 5 / 4, 5 / 3, 9 / 8, 15 / 8];
    interval = factors[8];


    let waveform1 = analyzer1.getValue();
    let waveform2 = analyzer2.getValue();

    graphLissajousMap.strokeWeight(2);
    graphLissajousMap.noFill();
    graphLissajousMap.stroke(0, 180, 0);
    graphLissajousMap.beginShape();
    for (let i = 0; i < waveform1.length; i++) {
        let x = map(waveform1[i] * 1.5, -1, 1, 0, graphLissajousMap.width);
        let y = map(waveform2[i] * 1.5, -1, 1, graphLissajousMap.height, 0);
        graphLissajousMap.vertex(x, y);
    }
    graphLissajousMap.endShape();

    image(graphLissajousMap, 320, 0);
}