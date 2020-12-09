// 1.init all the effect
// 2.create the source
// 3.attech the effect to the source
// 4.control the effect


let beepReverbCheck;
let beepFrequenceSlider;
let beepAttackTime;
let beepStartCheck;
let beepGapDurationSlider;

let beepPanDirection = -1;



let beepVolumeSlider;
let noiseVolumeSlider;
let radioVolumeSlider;
let pulseVolumeSlider;
let masterSlider;

let pulseStartCheck;
let pulsePanDirection = 0;
let pulseFreq;
let pulseGap = 0.01;

let noiseStartCheck;
let noiseLowPassFreqSld;
let noiseHighPassFreqSld;

let selectReverb;



//-------Button-------
function setup() {
    createUI();
    //----------------canvas
    let canv = createCanvas(400, 1200);
    canv.position(300, 0);
    graphRadarMap = createGraphics(400,400);
    graphStationMap = createGraphics(400, 100);
    graphLissajousMap = createGraphics(400,400);

    initStations();
}

let gripNum = 20;
let gridOffset = 0;
let theta = 3.14159265;



function draw() {
    changeFilterFreq();

    changeVolume();
    changePulsePan();
    changePulseFreq(7000);

    //------------------
    createRadarMap();
    createStationMap();
   createLissajousMap();
    for (i in stations){
        stations[i].show();
    }

}



// Create the beep Wave
const beepSynth = new Tone.MonoSynth({
    oscillator: {
        type: "sine"
    },
    envelope: {
        attack: 0.04,
        decay: 0.01,
        sustain: 1,
        release: 2
    },
}
).connect(beepPanner);


//Create the Noise Synth Wave
const noiseSynth = new Tone.NoiseSynth({
    noise: {
        type: "pink"
    },
    envelope: {
        attack: 9,
        decay: 0.01,
        sustain: 1,
        release: 5
    }
});


const pulseSynth = new Tone.MonoSynth({
    oscillator: {
        type: "square10"
    },
    envelope: {
        attack: 0.01,
        decay: 0,
        sustain: 0.3,
        release: 0.001
    },
}
).connect(pulsePanner);



//Router    
noiseSynth.chain(lowPassFilter, highPassFilter, Tone.Master);

let beepLoop = new Tone.Loop(function (time) {
    beepPanner.pan.value = beepPanDirection;
    console.log(beepPanner.pan.value);
    beepSynth.triggerAttackRelease(beepFrequenceSlider.value(), beepAttackTime.value());
    if (beepPanDirection > 1) {
        beepPanDirection = -1;
    } else {
        beepPanDirection += 0.3;
    }
    stationCount += 1;
}, "3m");

let pulseLoop = new Tone.Loop(function (time) {
    pulsePanner.pan.value = pulsePanDirection;
    pulseSynth.triggerAttackRelease(pulseFreq, 0.03);
}, 0.1);

const analyzer1 = new Tone.Waveform(1024);
const analyzer2 = new Tone.Waveform(1024);

beepSynth.connect(analyzer1);
//beepSynth.connect(analyzer2);
currentReverb.connect(analyzer2);
pulseSynth.connect(analyzer2);
noiseSynth.connect(analyzer1);


Tone.Transport.start();
console.log(Tone.context.state);