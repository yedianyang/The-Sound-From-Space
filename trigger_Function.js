function changeReverb() {
    let sel = selectReverb.value();
    console.log('start change')
    console.log(sel);
    console.log(switch2.checked);
    if (switch2.checked) {
        beepSynth.disconnect(currentReverb);
        currentReverb = reverbList[sel];
        beepSynth.connect(currentReverb);
    } else {
        currentReverb = reverbList[sel];
    }
}

function changePulsePan() {
    pulsePanDirection = random(-0.8, 0.8);//map(Math.random(),0,1,-0.8,8);
    //console.log(pulsePanDirection);
}

function changePulseFreq(baseFreq = 6000) {
    pulseFreq = baseFreq + random(-10, 10)
}



function changePlaySpeed(speed) {
    beepLoop.interval = speed;
    console.log(speed);
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

function pulseStart() {
    if (this.checked()) {
        pulseLoop.start(0);
        console.log("pulse loop start");

    } else {
        pulseLoop.stop();
    }
}




function changeVolume() {
    if (beepVolumeValue > -39) {
        beepSynth.volume.value = beepVolumeValue;
    } else {
        beepSynth.volume.value = -60;
    }

    if (noiseVolumeValue > -39) {
        noiseSynth.volume.value = noiseVolumeValue;
    } else {
        noiseSynth.volume.value = -60;
    }


    if (pulseVolumeValue > -39) {
        pulseSynth.volume.value = pulseVolumeValue;
    } else {
        pulseSynth.volume.value = -60;
    }

    if (MasterVolumeValue > -45) {
        Tone.Master.volume.value = MasterVolumeValue;
    } else {
        Tone.Master.value = -60;
    }
}

