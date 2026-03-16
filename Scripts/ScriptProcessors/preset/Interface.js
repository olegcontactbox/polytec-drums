Content.makeFrontInterface(768, 444);
Engine.loadAudioFilesIntoPool();

const var s = Synth.getSampler("Sampler1");
s.enableRoundRobin(false);

const var knobPitch = Content.getComponent("Pitch");
const var knobDecay = Content.getComponent("Decay");
const var knobPitchValue = Content.getComponent("KnobPitchValue");
const var knobDecayValue = Content.getComponent("KnobDecayValue");

const var s2 = Synth.getSampler("Sampler2");
s2.enableRoundRobin(false);

const var knobPitch2 = Content.getComponent("Pitch2");
const var knobDecay2 = Content.getComponent("Decay2");
const var knobPitch2Value = Content.getComponent("KnobPitch2Value");
const var knobDecay2Value = Content.getComponent("KnobDecay2Value");

const var s3 = Synth.getSampler("Sampler3");
s3.enableRoundRobin(false);

const var knobPitch3 = Content.getComponent("Pitch3");
const var knobDecay3 = Content.getComponent("Decay3");
const var knobPitch3Value = Content.getComponent("KnobPitch3Value");
const var knobDecay3Value = Content.getComponent("KnobDecay3Value");


const var s4 = Synth.getSampler("Sampler4");
s4.enableRoundRobin(false);

const var knobPitch4 = Content.getComponent("Pitch4");
const var knobDecay4 = Content.getComponent("Decay4");
const var knobPitch4Value = Content.getComponent("KnobPitch4Value");
const var knobDecay4Value = Content.getComponent("KnobDecay4Value");

const var knobPitch5 = Content.getComponent("Pitch5");
const var knobDecay5 = Content.getComponent("Decay5");
const var knobPitch5Value = Content.getComponent("KnobPitch5Value");
const var knobDecay5Value = Content.getComponent("KnobDecay5Value");

// attack knobs
const var ahdsr = Synth.getModulator("AHDSR Envelope1");
const var knobAttack = Content.getComponent("Attack");
const var knobAttackValue = Content.getComponent("AttackValue");

const var ahdsr2 = Synth.getModulator("AHDSR Envelope2");
const var knobAttack2 = Content.getComponent("Attack2");
const var knobAttack2Value = Content.getComponent("Attack2Value");

const var env2 = Synth.getModulator("DefaultEnvelope2");
const var knobAttack3 = Content.getComponent("Attack3");
const var knobAttack3Value = Content.getComponent("Attack3Value");

// drift knobs
const var randMod = Synth.getModulator("Random Modulator1");
const var knobDrift = Content.getComponent("Drift");
const var knobDriftValue = Content.getComponent("DriftValue");

const var randMod2 = Synth.getModulator("Random Modulator2");
const var knobDrift2 = Content.getComponent("Drift2");
const var knobDrift2Value = Content.getComponent("Drift2Value");

const var randMod3 = Synth.getModulator("Random Modulator3");
const var knobDrift3 = Content.getComponent("Drift3");
const var knobDrift3Value = Content.getComponent("Drift3Value");

// extra sounds;
const var s5 = Synth.getSampler("Sampler5");
s5.enableRoundRobin(false);
const var knobPitch6 = Content.getComponent("Pitch6");
const var knobTone = Content.getComponent("Tone");

// conga
const var s6 = Synth.getSampler("Sampler6");
s6.enableRoundRobin(false);
const var knobPitch7 = Content.getComponent("Pitch7");
const var knobDecay7 = Content.getComponent("Decay7");
const var clickGen = Synth.getChildSynth("Sine Wave Generator1");
const var knobClick = Content.getComponent("Click");



const var s7 = Synth.getSampler("Sampler7");
s7.enableRoundRobin(false);
const var s7FineTune = Synth.getModulator("Constant5");
const var knobPitch8 = Content.getComponent("Pitch8");
const var knobDecay8 = Content.getComponent("Decay8");

// mixer

const var vol1 = Content.getComponent("Vol1");
const var vol2 = Content.getComponent("Vol2");
const var vol3 = Content.getComponent("Vol3");
const var vol4 = Content.getComponent("Vol4");
const var vol5 = Content.getComponent("Vol5");
const var vol6 = Content.getComponent("Vol6");
const var vol7 = Content.getComponent("Vol7");
const var vol8 = Content.getComponent("Vol8");

const var gain1 = Synth.getEffect("Simple Gain1");
const var gain2 = Synth.getEffect("Simple Gain2");
const var gain3 = Synth.getEffect("Simple Gain3");
const var gain4 = Synth.getEffect("Simple Gain4");
const var gain5 = Synth.getEffect("Simple Gain5");
const var gain6 = Synth.getEffect("Simple Gain6");
const var gain7 = Synth.getEffect("Simple Gain7");

const var mixerPanel = Content.getComponent("MixerPanel");
const var mixerButton = Content.getComponent("MixerButton");

const var saturator = Synth.getEffect("Saturator1");
const var knobDrive = Content.getComponent("Drive");

function onNoteOn()
{
	var group = knobPitch.getValue() * 10 + knobDecay.getValue() + 1;
	s.setActiveGroup(group);
	
	var group2 = knobPitch2.getValue() * 10 + knobDecay2.getValue() + 1;
	s2.setActiveGroup(group2);
	
	var group3 = knobPitch3.getValue() * 10 + knobDecay3.getValue() + 1;
	s3.setActiveGroup(group3);
	
	var note = Message.getNoteNumber();
	Console.print(note);
	// max rrgroup is 127, so there is no way to use 130 samples
	if (note == 51) { // D#2
	    var group4 = knobPitch4.getValue() * 10 + knobDecay4.getValue();
	    s4.setActiveGroup(group4 > 127 ? 127 : group4);
	    Message.setVelocity(Message.getVelocity() * vol4.getValue());
	} else if (note == 52) { // E2
	    var group5 = knobPitch5.getValue() * 10 + knobDecay5.getValue();
	    s4.setActiveGroup(group5 > 127 ? 127 : group5);
	    Message.setVelocity(Message.getVelocity() * vol5.getValue());
	}
	
	var group6 = knobPitch6.getValue() * 7 + knobTone.getValue() + 1;
	s5.setActiveGroup(group6);
	
	var group7 = knobPitch7.getValue() * 9 + knobDecay7.getValue() + 1;
	s6.setActiveGroup(group7);
	
	var pitchValue8 = knobPitch8.getValue();
    var intPart8 = Math.floor(pitchValue8);
    var fracPart8 = pitchValue8 - intPart8;
	var group8 = intPart8 * 10 + knobDecay8.getValue() + 1;
	s7.setActiveGroup(group8);
	s7FineTune.setIntensity(fracPart8);
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	if (number == knobPitch) {
	    knobPitchValue.set("text", parseInt(value));
	}
	
	if (number == knobDecay) {
	    knobDecayValue.set("text", parseInt(value));
	}
	
	if (number == knobPitch2) {
	    knobPitch2Value.set("text", parseInt(value));
	}
	
	if (number == knobDecay2) {
	    knobDecay2Value.set("text", parseInt(value));
	}
	
	if (number == knobPitch3) {
	    knobPitch3Value.set("text", parseInt(value));
	}
	
	if (number == knobDecay3) {
	    knobDecay3Value.set("text", parseInt(value));
	}
	
	if (number == knobPitch4) {
	    knobPitch4Value.set("text", parseInt(value));
	}
	
	if (number == knobDecay4) {
	    knobDecay4Value.set("text", parseInt(value));
	}
	
	if (number == knobPitch5) {
	    knobPitch5Value.set("text", parseInt(value));
	}
	
	if (number == knobDecay5) {
	    knobDecay5Value.set("text", parseInt(value));
	}
	
	// attack
	
	if (number == knobAttack) {
		ahdsr.setAttribute(ahdsr.Attack, value);
	    knobAttackValue.set("text", parseInt(value));
	}
	
	if (number == knobAttack2) {
		ahdsr2.setAttribute(ahdsr2.Attack, value);
	    knobAttack2Value.set("text", parseInt(value));
	}
	
	if (number == knobAttack3) {
		env2.setAttribute(env2.Attack, value);
	    knobAttack3Value.set("text", parseInt(value));
	}
	
	// drift
	
	if (number == knobDrift) {
		randMod.setIntensity(value);
	    knobDriftValue.set("text", parseInt(value * 100 + 0.00001));
	}
	
	if (number == knobDrift2) {
		randMod2.setIntensity(value);
		knobDrift2Value.set("text", parseInt(value * 100 + 0.00001));
	}
	
	if (number == knobDrift3) {
		randMod3.setIntensity(value);
	    knobDrift3Value.set("text", parseInt(value * 100 + 0.00001));
	}
	
	// mixer
	if (number == vol1) { gain1.setAttribute(gain1.Gain, value); }
	if (number == vol2) { gain2.setAttribute(gain2.Gain, value); }
	if (number == vol3) { gain3.setAttribute(gain3.Gain, value); }
	if (number == vol6) { gain5.setAttribute(gain5.Gain, value); }
	if (number == vol7) { gain6.setAttribute(gain6.Gain, value); }
	if (number == vol8) { gain7.setAttribute(gain7.Gain, value); }
	
	if (number == mixerButton) {
		const var isMixerVisible = !!mixerButton.getValue();
		Console.print('isvis: ' + isMixerVisible);
		
		Content.makeFrontInterface(768, isMixerVisible ? 444 : 362);
	}
	
	if (number == knobDrive) {
	    // increase drive
	    saturator.setAttribute(saturator.Saturation, value);
	    // compensate gain — as drive increases, reduce output
	    saturator.setAttribute(saturator.PostGain, 0 - (value * 9));
	}
	
	// conga click
	if (number == knobClick) {
	    clickGen.setAttribute(clickGen.Gain, value);
	}
}
 