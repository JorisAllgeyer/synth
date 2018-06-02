window.onload = function(){
// INIT CONTEXT
  var ctxAudio = new (window.AudioContext || window.webkit.AudioContext)();
// INIT OSC
  var osc = ctxAudio.createOscillator();
// OSC TYPES
  var saw = document.querySelector('#saw');
  saw.addEventListener('mousedown', function(){
    osc.type = 'sawtooth';
  })
  var sine = document.querySelector('#sine');
  sine.addEventListener('mousedown', function(){
    osc.type = 'sine';
  })
  var tri = document.querySelector('#tri');
  tri.addEventListener('mousedown', function(){
    osc.type = 'triangle';
  })
//
  osc.start();
  var gainNode = ctxAudio.createGain();
  gainNode.gain.value = 1;

// NOTES
  // DO
  var buttonC = document.querySelector('#button-c');
  buttonC.addEventListener('mousedown', function(){
    osc.frequency.value = 261.62;
    osc.connect(ctxAudio.destination);
  })
  buttonC.addEventListener('mouseup', function(){
    osc.disconnect(ctxAudio.destination);
  })
  // RE
  var buttonD = document.querySelector('#button-d');
  buttonD.addEventListener('mousedown', function(){
    osc.frequency.value = 293.66;
    osc.connect(ctxAudio.destination);
  })
  buttonD.addEventListener('mouseup', function(){
    osc.disconnect(ctxAudio.destination);
  })
  // MI
  var buttonE = document.querySelector('#button-e');
  buttonE.addEventListener('mousedown', function(){
    osc.frequency.value = 329.62;
    osc.connect(ctxAudio.destination);
  })
  buttonE.addEventListener('mouseup', function(){
    osc.disconnect(ctxAudio.destination);
  })
  // FA
  var buttonF = document.querySelector('#button-f');
  buttonF.addEventListener('mousedown', function(){
    osc.frequency.value = 349.22;
    osc.connect(ctxAudio.destination);
  })
  buttonF.addEventListener('mouseup', function(){
    osc.disconnect(ctxAudio.destination);
  })
  // SOL
  var buttonG = document.querySelector('#button-g');
  buttonG.addEventListener('mousedown', function(){
    osc.frequency.value = 391.99;
    osc.connect(ctxAudio.destination);
  })
  buttonG.addEventListener('mouseup', function(){
    osc.disconnect(ctxAudio.destination);
  })
  // LA
  var buttonA = document.querySelector('#button-a');
  buttonA.addEventListener('mousedown', function(){
    osc.frequency.value = 440;
    osc.connect(ctxAudio.destination);
  })
  buttonA.addEventListener('mouseup', function(){
    osc.disconnect(ctxAudio.destination);
  })
  // SI
  var buttonB = document.querySelector('#button-b');
  buttonB.addEventListener('mousedown', function(){
    osc.frequency.value = 493.88;
    osc.connect(ctxAudio.destination);
  })
  buttonB.addEventListener('mouseup', function(){
    osc.disconnect(ctxAudio.destination);
  })
  // DO
  var buttonC2 = document.querySelector('#button-c2');
  buttonC2.addEventListener('mousedown', function(){
    osc.frequency.value = 523.25;
    osc.connect(ctxAudio.destination);
  })
  buttonC2.addEventListener('mouseup', function(){
    osc.disconnect(ctxAudio.destination);
  })

  // MOBILE TOUCH VERSION
// OSC TYPES
  var saw = document.querySelector('#saw');
  saw.addEventListener('touchstart', function(){
    osc.type = 'sawtooth';
  })
  var sine = document.querySelector('#sine');
  sine.addEventListener('touchstart', function(){
    osc.type = 'sine';
  })
  var tri = document.querySelector('#tri');
  tri.addEventListener('touchstart', function(){
    osc.type = 'triangle';
  })
// NOTES
  // DO
  var buttonC = document.querySelector('#button-c');
  buttonC.addEventListener('touchstart', function(){
    osc.frequency.value = 261.62;
    osc.connect(ctxAudio.destination);
  })
  buttonC.addEventListener('touchend', function(){
    osc.disconnect(ctxAudio.destination);
  })
  // RE
  var buttonD = document.querySelector('#button-d');
  buttonD.addEventListener('touchstart', function(){
    osc.frequency.value = 293.66;
    osc.connect(ctxAudio.destination);
  })
  buttonD.addEventListener('touchend', function(){
    osc.disconnect(ctxAudio.destination);
  })
  // MI
  var buttonE = document.querySelector('#button-e');
  buttonE.addEventListener('touchstart', function(){
    osc.frequency.value = 329.62;
    osc.connect(ctxAudio.destination);
  })
  buttonE.addEventListener('touchend', function(){
    osc.disconnect(ctxAudio.destination);
  })
  // FA
  var buttonF = document.querySelector('#button-f');
  buttonF.addEventListener('touchstart', function(){
    osc.frequency.value = 349.22;
    osc.connect(ctxAudio.destination);
  })
  buttonF.addEventListener('touchend', function(){
    osc.disconnect(ctxAudio.destination);
  })
  // SOL
  var buttonG = document.querySelector('#button-g');
  buttonG.addEventListener('touchstart', function(){
    osc.frequency.value = 391.99;
    osc.connect(ctxAudio.destination);
  })
  buttonG.addEventListener('touchend', function(){
    osc.disconnect(ctxAudio.destination);
  })
  // LA
  var buttonA = document.querySelector('#button-a');
  buttonA.addEventListener('touchstart', function(){
    osc.frequency.value = 440;
    osc.connect(ctxAudio.destination);
  })
  buttonA.addEventListener('touchend', function(){
    osc.disconnect(ctxAudio.destination);
  })
  // SI
  var buttonB = document.querySelector('#button-b');
  buttonB.addEventListener('touchstart', function(){
    osc.frequency.value = 493.88;
    osc.connect(ctxAudio.destination);
  })
  buttonB.addEventListener('touchend', function(){
    osc.disconnect(ctxAudio.destination);
  })
  // DO
  var buttonC2 = document.querySelector('#button-c2');
  buttonC2.addEventListener('touchstart', function(){
    osc.frequency.value = 523.25;
    osc.connect(ctxAudio.destination);
  })
  buttonC2.addEventListener('touchend', function(){
    osc.disconnect(ctxAudio.destination);
  })
};
