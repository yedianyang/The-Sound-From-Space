let graphStationMap;
let stationGrapNumber = 20;
let stations = [];
let stationCount = 0;
let stationReverb = false;


function createStationMap() {
    graphStationMap.background(0);


    graphStationMap.stroke(0, 180, 0, 100);
    graphStationMap.strokeWeight(2);

    for (let i = 0; i < stationGrapNumber; i++) {
        let x = i * (graphStationMap.width / stationGrapNumber);
        let y = i * (graphStationMap.width / stationGrapNumber);
        graphStationMap.line(x, 0, x, graphStationMap.height);
        graphStationMap.line(0, y, graphStationMap.width, y);
    }
    // if (gridOffset > graphStationMap.width / stationGrapNumber) {
    //     gridOffset = 0;
    // } else {
    //     gridOffset += 0.5;
    // }


    let stationNum = 4;
    for (let i = 0; i < stationNum + 1; i++) {
        console.log(stationCount);
        
        if (i == stationCount) {
            if (stationReverb) {
                graphStationMap.fill(0, 200, 0);
            } else {
                graphStationMap.fill(0, 150, 0);
            }
        } else {
            graphStationMap.fill(0, 0, 0);
        }
        if (stationCount >= 5) {
            stationCount = 0;
        }
        graphStationMap.stroke(0, 100, 0);
        let temp = (graphStationMap.width - 80) / stationNum;
        graphStationMap.rect(temp * i + 20, graphStationMap.height - 50 - 20, 20, 50);
    }




    image(graphStationMap, 0, 420);
}


function initStations() {
    let stationNum = 5;
    for (let i = 0; i < stationNum + 1; i++) {
        let x = (graphStationMap.width - 80) / stationNum;
        let s = new Station(x * i, 0);
        stations.push(s);
    }
}

class Station {
    constructor(_x, _y) {
        this.color = color(0, 100, 0);
        this.x = _x;
        this.y = _y;
        this.width = 20;
        this.height = 50;
    }
    show() {
        graphStationMap.fill(this.color);
        graphStationMap.rect(this.x, this.y, this.width, this.height);
    }
    update(currentStation) {

    }
}
