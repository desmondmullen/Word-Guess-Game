var context = new(window.AudioContext || window.webkitAudioContext)();

var oscillator = context.createOscillator();

oscillator.type = 'sawtooth';
oscillator.frequency.value = 110;
oscillator.connect(context.destination);
oscillator.start();
oscillator.stop(context.currentTime + 0.07);



var context = new(window.AudioContext || window.webkitAudioContext)();
var context2 = new(window.AudioContext || window.webkitAudioContext)();
var oscillator = context.createOscillator();
var oscillator2 = context2.createOscillator();

oscillator.type = 'sine';
oscillator.frequency.value = 660;
oscillator.connect(context.destination);
oscillator.start();
oscillator.stop(context.currentTime + 0.05);
oscillator2.type = 'sine';
oscillator2.frequency.value = 880;
oscillator2.connect(context2.destination);
oscillator2.start(context2.currentTime + 0.07);
oscillator2.stop(context2.currentTime + 1);