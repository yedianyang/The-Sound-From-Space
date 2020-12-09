//Effect

//const feedbackDelay = new Tone.FeedbackDelay(0.5, 0.5).toMaster();
//const distortion = new Tone.Distortion(0.4).toMaster();

//Reverb list
const convolver0_5 = new Tone.Convolver('IR/reverb0_1-0_5-17000-1000.wav').toMaster();
const convolver1_0 = new Tone.Convolver('IR/reverb0_1-1-17000-1000.wav').toMaster();
const convolver1_5 = new Tone.Convolver('IR/reverb0_1-1_5-17000-1000.wav').toMaster();
const convolver2_0 = new Tone.Convolver('IR/reverb0_1-2-17000-1000.wav').toMaster();
const convolver2_5 = new Tone.Convolver('IR/reverb0_1-2_5-17000-1000.wav').toMaster();
const convolver3_0 = new Tone.Convolver('IR/reverb0_1-3-17000-1000.wav').toMaster();

let currentReverb = convolver2_5;
let reverbList = {
    '0.5s': convolver0_5,
    '1.0s': convolver1_0,
    '1.5s': convolver1_5,
    '2.0s': convolver2_0,
    '2.5s': convolver2_5,
    '3.0s': convolver3_0,
}

// Filter set up and change
const highPassFilter = new Tone.Filter(700, "highpass");
const lowPassFilter = new Tone.Filter(1370, "lowpass");

const beepPanner = new Tone.Panner(-1).toMaster();
const pulsePanner = new Tone.Panner(0).toMaster();