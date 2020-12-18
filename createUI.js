let switch1;
let switch2;
let switch3;
let switch4;

let led01;
let led02;
let led03;
let led04;

function createUI() {
    switch1 = document.getElementById('sw1');
    led01 = document.getElementById('beepOnOffIndcator');
    
    switch1.addEventListener("change", (event) => {
        if (event.target.value == 1) {
            beepPanner.pan.value = -1;
            beepLoop.start(0);
            console.log("loop start");
            led01.value = 1;
        } else {
            beepLoop.stop();
            led01.value = 0;
        }
    });

    // createP('beepSynth');
    // beepStartCheck = createCheckbox('Beep', false);
    // beepStartCheck.changed(beepStart);

    switch2 = document.getElementById('sw2');
    led02 = document.getElementById('ReverbOnOffIndcator');
    switch2.addEventListener("change", (event) => {
        if (event.target.value == 1) {
            console.log('connect reverb')
            beepSynth.connect(currentReverb);
            stationReverb = true;
            led02.value = 1;
        } else {
            beepSynth.disconnect(currentReverb);
            stationReverb = false;
            console.log('disconnect reverb');
            led02.value = 0;
        }
    });

    switch3 = document.getElementById('sw3');
    led03 = document.getElementById('NoiseOnOffIndcator');
    switch3.addEventListener("change", (event) => {
        if (event.target.value == 1) {
            noiseSynth.triggerAttack(3, 0.5);
            led03.value = 1;
        } else {
            noiseSynth.triggerRelease(0);
            led03.value = 0;
        }
    });

    switch4 = document.getElementById('sw4');
    led04 = document.getElementById('PulseOnOffIndcator');
    switch4.addEventListener("change", (event) => {
        if (event.target.value == 1) {
            pulseLoop.start(0);
            console.log("pulse loop start");
            led04.value = 1;
        } else {
            pulseLoop.stop();
            led04.value = 0;
        }
    });


    selectReverb = createSelect();
    selectReverb.option('0.5s');
    selectReverb.option('1.0s');
    selectReverb.option('1.5s');
    selectReverb.option('2.0s');
    selectReverb.option('2.5s');
    selectReverb.option('3.0s');
    selectReverb.changed(changeReverb);
    selectReverb.position(260, 370);

    beepGapDurationSlider = document.getElementById("beepIntervalKnob");
    beepGapDurationSlider.addEventListener("change", () => {
        changePlaySpeed(event.target.value);
    });

    beepAttackTime = document.getElementById("beepAttackTimeKnob");
    beepAttackTime.addEventListener("change", (event) => {
        beepAttackTimeValue = event.target.value;
        console.log(beepAttackTimeValue);
    });



    beepFrequenceSlider = document.getElementById("beepFreqKnob");
    beepFrequenceSlider.addEventListener("change", (event) => {
        beepFrequenceValue = event.target.value;
    });


    noiseHighPassFreqSld = document.getElementById("filterHighPass");
    noiseHighPassFreqSld.addEventListener("change", (event) => {
        highPassFilter.set({
            frequency: event.target.value
        });
    });




    noiseLowPassFreqSld = document.getElementById("filterLowPass");
    noiseLowPassFreqSld.addEventListener("change", (event) => {
        lowPassFilter.set({
            frequency: event.target.value
        });
    });

    beepVolumeSlider = document.getElementById("fader01");
    beepVolumeSlider.addEventListener("change", (event) => {
        beepVolumeValue = event.target.value;
    });

    noiseVolumeSlider = document.getElementById("fader02");
    noiseVolumeSlider.addEventListener("change", (event) => {
        noiseVolumeValue = event.target.value;

    });

    pulseVolumeSlider = document.getElementById("fader03");
    pulseVolumeSlider.addEventListener("change", (event) => {
        pulseVolumeValue = event.target.value;

    });

    masterSlider = document.getElementById("MasterFader");
    masterSlider.addEventListener("change", (event) => {
        MasterVolumeValue = event.target.value;
        console.log(event.target.value)
    });
}