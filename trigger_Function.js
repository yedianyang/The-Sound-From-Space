function changeReverb() {
    let sel = selectReverb.value();
    console.log('start change')
    console.log(sel);


    console.log(beepReverbCheck.checked())
    if (beepReverbCheck.checked()) {
        beepSynth.disconnect(currentReverb);
        currentReverb = reverbList[sel];
        beepSynth.connect(currentReverb);
    } else {
        currentReverb = reverbList[sel];
    }
}

function changePulsePan(){
    pulsePanDirection = random(-0.8,0.8);//map(Math.random(),0,1,-0.8,8);
    //console.log(pulsePanDirection);
}

function changePulseFreq(baseFreq = 6000){ 
    pulseFreq = baseFreq + random(-10,10)
}



function changePlaySpeed() {
    beepLoop.interval = beepGapDurationSlider.value();
}



function beepStart() {
    if (this.checked()) {
        beepPanner.pan.value = -1;
        beepLoop.start(0);
        console.log("loop start");
        
    } else {
        beepLoop.stop();
    }
}

function beepReverb() {
    if (this.checked()) {
        beepSynth.connect(currentReverb);
        stationReverb = true;

    } else {
        beepSynth.disconnect(currentReverb);
        stationReverb = false;
    }
    console.log('connect to a reverb');
}

function noiseStart() {
    if (this.checked()) {
        noiseSynth.triggerAttack(3, 0.5);
    } else {
        noiseSynth.triggerRelease(0);
    }
}

function changeFilterFreq() {
    highPassFilter.set({
        frequency: noiseHighPassFreqSld.value()
    });
    lowPassFilter.set({
        frequency: noiseLowPassFreqSld.value()
    })
}

function pulseStart(){
    if (this.checked()) {
        pulseLoop.start(0);
        console.log("pulse loop start");

    } else {
        pulseLoop.stop();
    }
}

function changeVolume() {
    if (beepVolumeSlider.value() > -39) {
        beepSynth.volume.value = beepVolumeSlider.value();
    } else {
        beepSynth.volume.value = -60;
    }

    if (noiseVolumeSlider.value() > -39) {
        noiseSynth.volume.value = noiseVolumeSlider.value();
    } else {
        noiseSynth.volume.value = -60;
    }


    if (noiseVolumeSlider.value() > -39) {
        pulseSynth.volume.value = pulseVolumeSlider.value();
    } else {
        pulseSynth.volume.value = -60;
    }
}
