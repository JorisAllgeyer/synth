window.onload = function(){
// INIT CONTEXT
  var ctxAudio = new (window.AudioContext || window.webkit.AudioContext)();

  var osc = ctxAudio.createOscillator();

  osc.start();
  var gainNode = ctxAudio.createGain();
  gainNode.gain.value = 1;

// OSC TYPES
  function oscillatorType(button, waveform){
    var btn = document.querySelector(button);
    btn.addEventListener('mousedown', function(){
      osc.type = waveform;
    })
  }
  oscillatorType('#sine','sine');
  oscillatorType('#saw','sawtooth');
  oscillatorType('#tri','triangle');

// NOTES
  function key(button, frequency){
    var btn = document.querySelector(button);
    btn.addEventListener('mousedown', function(){
      osc.frequency.value = frequency;
      osc.connect(ctxAudio.destination);
    })
    btn.addEventListener('mouseup', function(){
      osc.disconnect(ctxAudio.destination);
    })
  }

  key('#button-c', 261.62); //DO
  key('#button-d', 293.66); //RE
  key('#button-e', 329.62); //MI
  key('#button-f', 349.22); //FA
  key('#button-g', 391.99); //SOL
  key('#button-a', 440); //LA
  key('#button-b', 493.88); //SI
  key('#button-c2', 523.25); //DO

/*--------------------------------------------------
-----------------MOBILE TOUCH VERSION---------------
----------------------------------------------------*/

// OSC TYPES
  function oscillatorTypeM(button, waveform){
    var btn = document.querySelector(button);
    btn.addEventListener('touchstart', function(){
      osc.type = waveform;
    })
  }
  oscillatorTypeM('#sine','sine');
  oscillatorTypeM('#saw','sawtooth');
  oscillatorTypeM('#tri','triangle');

// NOTES
  function keyM(button, frequency){
    var btn = document.querySelector(button);
    btn.addEventListener('touchstart', function(){
      osc.frequency.value = frequency;
      osc.connect(ctxAudio.destination);
    })
    btn.addEventListener('touchend', function(){
      osc.disconnect(ctxAudio.destination);
    })
  }

  keyM('#button-c', 261.62); //DO
  keyM('#button-d', 293.66); //RE
  keyM('#button-e', 329.62); //MI
  keyM('#button-f', 349.22); //FA
  keyM('#button-g', 391.99); //SOL
  keyM('#button-a', 440); //LA
  keyM('#button-b', 493.88); //SI
  keyM('#button-c2', 523.25); //DO

};
