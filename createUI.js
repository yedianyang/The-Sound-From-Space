function createUI(){
    createP('beepSynth');
    beepStartCheck = createCheckbox('Beep', false);
    beepStartCheck.changed(beepStart);
    beepReverbCheck = createCheckbox('Beep Reverb', false);
    beepReverbCheck.changed(beepReverb);

    selectReverb = createSelect();
    selectReverb.position(0, 200);
    selectReverb.option('0.5s');
    selectReverb.option('1.0s');
    selectReverb.option('1.5s');
    selectReverb.option('2.0s');
    selectReverb.option('2.5s');
    selectReverb.option('3.0s');
    selectReverb.changed(changeReverb);

    createP('Interval')
    beepGapDurationSlider = createSlider(1, 16, 6, 1);
    beepGapDurationSlider.mouseReleased(changePlaySpeed)

    createP('beepAttackTime');
    beepAttackTime = createSlider(0.02, 0.5, 0.1, 0.02);
    createP('beepFrequenceSlider');
    beepFrequenceSlider = createSlider(1500, 3000, 2650, 50);


    createP('--------------------------------')
    createP('background noise');
    noiseStartCheck = createCheckbox('noise', false);
    noiseStartCheck.changed(noiseStart);
    createP('--High Pass-------Low Pass-------');
    noiseHighPassFreqSld = createSlider(0, 1200, 730, 10);

    noiseLowPassFreqSld = createSlider(1000, 3000, 1370, 10);
    
    createP('--------------------------------')
    createP('pulse');
    pulseStartCheck = createCheckbox('pulse',false);
    pulseStartCheck.changed(pulseStart);

    createP('--------------------------------')
    createP('Beep Fader');
    beepVolumeSlider = createSlider(-40, 0, -12, 0.2);
    createP('Noise Fader');
    noiseVolumeSlider = createSlider(-40, 0, -12, 0.2);
    createP('Pulse Volume');
    pulseVolumeSlider = createSlider(-40, 0, -12, 0.2);


    createP('--------------------------------')
    createP('Volume');
    masterSlider = createSlider(-60, 0, -12, 0.5);
}