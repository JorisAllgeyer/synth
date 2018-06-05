window.onload = function(){
// INIT CONTEXT
  var ctxAudio = new (window.AudioContext || window.webkit.AudioContext)();
  var osc = ctxAudio.createOscillator();
  osc.start();
  var gainNode = ctxAudio.createGain();
  gainNode.gain.value = 0;

// MASTER VOLUME
  masterVolume = document.getElementById('slider');

  masterVolume.addEventListener('change', function(){
    gainNode.gain.value = masterVolume.value;
  });

// CONNEXIONS
  osc.connect(gainNode);
  gainNode.connect(ctxAudio.destination);

// FREQUENCIES
  var notes = [
    261.66,
    277.18,
    293.66,
    311.13,
    329.62,
    349.22,
    369.99,
    391.99,
    415.30,
    440,
    466.16,
    493.88,
    523.25
  ];

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
var frequency = 0;

// OCTAVES
  function oct(button, oct){
    var btn = document.querySelector(button);
    btn.addEventListener('mousedown', function(){
      if (oct == -1) {
        for (var i = 0; i < notes.length; i++) {
          frequency = notes[i] / 2;
        }
      } else if (oct == 1) {
        for (var i = 0; i < notes.length; i++) {
          frequency = notes[i] * 2;
        }
      } else {
        for (var i = 0; i < notes.length; i++) {
          frequency = notes[i];
        }
      }
    })
  }

  oct('#down', -1);
  oct('#normal', 0);
  oct('#up', 1);

  function key(button, frequency){
    var btn = document.querySelector(button);
    btn.addEventListener('mousedown', function(){
      osc.frequency.value = frequency;
      gainNode.gain.value = masterVolume.value;
    })
    btn.addEventListener('mouseup', function(){
      gainNode.gain.value = 0;
    })
  }


  key('#button-c', notes[0]); //DO
    key('#button-csharp', notes[1]); //DO#
  key('#button-d', notes[2]); //RE
    key('#button-dsharp', notes[3]); //RE#
  key('#button-e', notes[4]); //MI
  key('#button-f', notes[5]); //FA
    key('#button-fsharp', notes[6]); //FA#
  key('#button-g', notes[7]); //SOL
    key('#button-gsharp', notes[8]); //SOL#
  key('#button-a', notes[9]); //LA
    key('#button-bflat', notes[10]); //SIB
  key('#button-b', notes[11]); //SI
  key('#button-c2', notes[12]); //DO


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
      gainNode.gain.value = masterVolume.value;
    })
    btn.addEventListener('touchend', function(){
      gainNode.gain.value = 0;
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
