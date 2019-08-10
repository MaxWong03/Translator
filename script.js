// loop 10 times

var loopAlternate = anime({
  targets: '#loopAlternate .pokemon',
  translateX: 250,
  loop: 10,
  direction: 'alternate'
});

//sepcific unit
var specificUnitValue = anime({
  targets: '#specificUnitValue .pokemon2',
  translateX: '1vh',
  rotate: '0.5turn',
  duration: 40000
});

//function based value
var functionBasedPropVal = anime({
  targets: '#functionBasedPropVal .el',
  translateX: function(el) {
    return el.getAttribute('data-x');
  },
  translateY: function(el, i) {
    return 100 + (-100 * i);
  },
  scale: function(el, i, l) {
    return (l - i) + .25;
  },
  rotate: 20,
  duration: function() { return anime.random(1200, 1800); },
  duration: function() { return anime.random(800, 1600); },
  delay: function() { return anime.random(0, 1000); },
  direction: 'alternate',
  loop: true
});

