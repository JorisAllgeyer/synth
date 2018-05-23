window.onload = function(){

  var ctxAudio = new (window.AudioContext || window.webkit.AudioContext)();

  var osc = ctxAudio.createOscillator();
  osc.type = 'triangle';
  osc.frequency.value = 100;
  osc.start();

  var gainNode = ctxAudio.createGain();
  gainNode.gain.value = 1;

  var button = document.querySelector('button');
  var connect = false;
  button.addEventListener('click', function(){
    if (connect){
      osc.disconnect(ctxAudio.destination);
    } else{
      osc.connect(ctxAudio.destination);
    }
    connect = !connect;
  })
};
