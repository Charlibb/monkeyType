// $ indicates it is a DOM element
const $time = document.querySelector('time');
const $paragraph = document.querySelector('paragraph');
const $input = document.querySelector('input');

const INITIAL_TIME = 30;

const TEXT =
  'The quick brown fox jumps over the lazy dog and charlidev is trying to clone money type for fun and for forgettign that life is futile and that inthe end we are all going to die eventually alone in a sorrow, but however all of this is meaningless as what matter the most is to say that free free palestine!';

let words = [];
let currentTime = INITIAL_TIME;

initGame();
initEvents();

function initGame() {
  words = TEXT.split(' ').slice('0, 32');
  currentTime = INITIAL_TIME;

  $time.textContent = currentTime;
  $paragraph.textContent = words.map((word) => word + ' ').join('');
}

function initEvents() {}
