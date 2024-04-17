// $ indicates it is part of the DOM element
const $time = document.querySelector('time');
const $paragraph = document.querySelector('p');
const $input = document.querySelector('input');

const INITIAL_TIME = 30;

const TEXT =
  'the quick brown fox jumps over the lazy dog and charlidev is trying to clone money type for fun and for forgettign that life is futile and that inthe end we are all going to die eventually alone in a sorrow, but however all of this is meaningless as what matter the most is to say that free free palestine!';

let words = [];
let currentTime = INITIAL_TIME;

initGame();
initEvents();

function initGame() {
  words = TEXT.split(' ').slice('0, 32');
  currentTime = INITIAL_TIME;

  $time.textContent = currentTime;
  // $paragraph.textContent = words.map((word) => word + ' ').join('');
  //Creating custom elements with a pre-fix
  $paragraph.innerHTML = words
    .map((word, index) => {
      const letters = word.split('');
      return ` <m-word>
    ${letters.map((letter) => `<m-letter>${letter}</m-letter>`).join('')}
    </m-word>
    `;
    })
    .join('');

  const $firstWord = $paragraph.querySelector('m-word');
  $firstWord.classList.add('active');
  $firstWord.querySelector('m-letter').classList.add('active');

  const intervalId = setInterval(() => {
    currentTime--;
    $time.textContent = currentTime;

    if (currentTime === 0) {
      clearInterval(intervalId);
      gameOver();
    }
  }, 15000);
}

function initEvents() {
  document.addEventListener('keydown', () => {
    $input.focus();
  });
  $input.addEventListener('keydown', onKeyDown);
  $input.addEventListener('keyup', onKeyUp);
}

function onKeyDown(event) {
  const $currentWord = $paragraph.querySelector('m-word.active');
  const $currentLetter = $currentWord.querySelector('m-letter.active');

  const { key } = event;
  if (key === ' ') {
    event.preventDefault();

    const $nextWord = $currentWord.nextElementSibling;
    const $nextLetter = $nextWord.querySelector('m-letter');

    $currentWord.classList.remove('active', 'marked');
    $currentLetter.classList.remove('active');

    $nextWord.classList.add('active');
    $nextLetter.classList.add('active');

    $input.value = '';

    const hasMissedLetters =
      $currentWord.querySelectorAll('m-letter:not(.correct)').length > 0;

    const classToAdd = hasMissedLetters
      ? $currentWord.classList.add('marked')
      : $currentWord.classList.add('correct');

    $currentWord.classList.add(classToAdd);
    return;
  }

  if (key === 'Backspace') {
    const $previousWord = $currentWord.previousElementSibling;
    const $previousLetter = $currentLetter.previousElementSibling;

    if (!$previousWord && !$previousLetter) {
      event.preventDefault();
      return;
    }
    const $wordMarked = $paragraph.querySelector('m-word.marked');

    if ($wordMarked && !$previousLetter) {
      event.preventDefault();
      $previousWord.classList.remove('marked');
      $previousWord.classList.add('active');

      const $letterToGo = $previousWord.querySelector('m-letter:last-child');

      $currentLetter.classList.remove('active');
      $letterToGo.classList.add('active');

      $input.value = [
        ...$prevWord.querySelectorAll('m-letter.correct, m-letter.incorrect'),
      ]
        .map(($el) => {
          return $el.classList.contains('correct') ? $el.innerText : '*';
        })
        .join('');
    }
  }
}

function onKeyUp() {
  const $currentWord = $paragraph.querySelector('m-word.active');
  const $currentLetter = $currentWord.querySelector('m-letter.active');

  const currentWord = $currentWord.innerText.trim();
  $input.maxLength = currentWord.length;
  console.log({ value: $input.value, currentWord });

  const $allLetters = $currentWord.querySelectorAll('m-letter');

  /*   console.log($allLetters[0].innerText, 'allLetters');
   */
  $allLetters.forEach(($letter) =>
    $letter.classList.remove('correct', 'incorrect')
  );
  $input.value.split('').forEach((char, index) => {
    const $letter = $allLetters[index];
    const letterToCheck = currentWord[index];

    const isCorrect = char === letterToCheck;
    const letterClass = isCorrect ? 'correct' : 'incorrect';
    $letter.classList.add(letterClass);
  });

  $currentLetter.classList.remove('active', 'is-last');
  const inputLength = $input.value.length;
  const $nextActiveLetter = $allLetters[inputLength];

  if ($nextActiveLetter) {
    $nextActiveLetter.classList.add('active');
  } else {
    $currentLetter.classList.add('active', 'is-last');
    //  @TODO: Game  Finished if there is no next word
  }
}

function gameOver() {
  alert('GAME OVER!!!!');
  $paragraph.innerHTML = 'GAMEOVER!';
}
