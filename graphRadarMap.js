let graphRadarMap;

function createRadarMap() {

    graphRadarMap.background(0);


    graphRadarMap.stroke(0, 180, 0, 100);
    graphRadarMap.strokeWeight(2);

    for (let i = 0; i < gripNum; i++) {
        let x = i * (graphRadarMap.width / gripNum);
        let y = i * (graphRadarMap.width / gripNum) + gridOffset;
        graphRadarMap.line(x, 0, x, graphRadarMap.height);
        graphRadarMap.line(0, y, graphRadarMap.width, y);
    }
    if (gridOffset > graphRadarMap.width / gripNum) {
        gridOffset = 0;
    } else {
        gridOffset += 0.5;
    }

    //blendMode(OVERLAY);
    //fill(0);
    //ellipse(width/2,height/2,width);


    graphRadarMap.push();
    graphRadarMap.translate(graphRadarMap.width / 2, graphRadarMap.height / 2);

    for (let i = 0; i < 125; i++) {
        if (i == 0) {
            graphRadarMap.stroke(0, 220, 0);
            graphRadarMap.strokeWeight(2);
        } else {
            graphRadarMap.strokeWeight(2);
            graphRadarMap.stroke(0, 170, 0, 255 - i * 2);
        }
        graphRadarMap.line(0, 0, 140 * cos(theta - i * 0.02), 140 * sin(theta - i * 0.02));
    }
    if (theta >= 3.1415 * 2) {
        theta = 0;
    } else {
        theta += 0.01;
    }
    //---Create SpaceShip---
    graphRadarMap.stroke(0, 100, 0);
    graphRadarMap.strokeWeight(1);
    graphRadarMap.beginShape();
    graphRadarMap.fill(0, 200, 0, 255);
    graphRadarMap.vertex(0, -15);
    graphRadarMap.vertex(10, 9);
    graphRadarMap.vertex(0, 5);
    graphRadarMap.endShape();
    graphRadarMap.beginShape();
    graphRadarMap.fill(0, 150, 0, 255);
    graphRadarMap.vertex(0, -15);
    graphRadarMap.vertex(-10, 9);
    graphRadarMap.vertex(0, 5);
    graphRadarMap.endShape();
    graphRadarMap.pop();

    


    image(graphRadarMap, 0, 0);
}



class Dust {
    constructor(_speed) {
        this.x = random(0,graphRadarMap.width);
        this.y = random(0,graphRadarMap.height);
        this.speed = _speed;
    }
    show() {
        graphRadarMap.strokeWeight(2);
        graphRadarMap.stroke(0,150,0);
        graphRadarMap.fill(0,150,0);
        graphRadarMap.ellipse(this.x,this.y,2);
    }
    update(){
        this.x += this.speed;
    }
}