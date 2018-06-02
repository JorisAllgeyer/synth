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
  oscillatorType('#square','square');

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
    key('#button-csharp', 277.18); //DO#
  key('#button-d', 293.66); //RE
    key('#button-dsharp', 311.13); //RE#
  key('#button-e', 329.62); //MI
  key('#button-f', 349.22); //FA
    key('#button-fsharp', 369.99); //FA#
  key('#button-g', 391.99); //SOL
    key('#button-gsharp', 415.30); //SOL#
  key('#button-a', 440); //LA
    key('#button-bflat', 466.16); //SIB
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
  oscillatorTypeM('#square','square');

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
    keyM('#button-csharp', 277.18); //DO#
  keyM('#button-d', 293.66); //RE
    keyM('#button-dsharp', 311.13); //RE#
  keyM('#button-e', 329.62); //MI
  keyM('#button-f', 349.22); //FA
    keyM('#button-fsharp', 369.99); //FA#
  keyM('#button-g', 391.99); //SOL
    keyM('#button-gsharp', 415.30); //SOL#
  keyM('#button-a', 440); //LA
    keyM('#button-bflat', 466.16); //SIB
  keyM('#button-b', 493.88); //SI
  keyM('#button-c2', 523.25); //DO

};
