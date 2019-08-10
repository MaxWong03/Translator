// loop 10 times

var loopAlternate = anime({
  targets: '#loopAlternate .pokemon',
  translateX: 250,
  loop: 10,
  direction: 'alternate'
});

//sepcific unit
var specificUnitValue = anime({
  targets: '#specificUnitValue .pokemon',
  translateX: '1vh',
  rotate: '0.5turn',
  duration: 50000
});