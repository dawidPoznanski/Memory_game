const cardArray = [
  {
    name: 'fries',
    img: 'images/fries.png',
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png',
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png',
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png',
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png',
  },
  {
    name: 'pizza',
    img: 'images/pizza.png',
  },
  {
    name: 'fries',
    img: 'images/fries.png',
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png',
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png',
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png',
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png',
  },
  {
    name: 'pizza',
    img: 'images/pizza.png',
  },
];

const grid = document.querySelector('.grid');
const result = document.querySelector('#result');

result.textContent = '0';
let cardsChosen = [];
let cardsChosenIds = [];
let cardsCollected = [];

cardArray.sort(() => 0.5 - Math.random());
// const card = document.createElement('img');
// console.log(cardArray);
function createBoard() {
  for (i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', 'images/blank.png');
    card.addEventListener('click', flipCard);
    card.setAttribute('data-id', i);
    grid.appendChild(card);
  }
}
createBoard();

function checkMatch() {
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  const cards = document.querySelectorAll('img');
  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', 'images/blank.png');
    cards[optionTwoId].setAttribute('src', 'images/blank.png');
    // alert('You have clicked the same image!');
  } else if (cardsChosen[0] == cardsChosen[1]) {
    // alert('You found a match!');
    cards[optionOneId].setAttribute('src', 'images/white.png');
    cards[optionTwoId].setAttribute('src', 'images/white.png');
    cards[optionOneId].removeEventListener('click', flipCard);
    cards[optionTwoId].removeEventListener('click', flipCard);

    cardsCollected.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute('src', 'images/blank.png');
    cards[optionTwoId].setAttribute('src', 'images/blank.png');
    // alert('Sorry try again');
  }

  cardsChosen = [];
  cardsChosenIds = [];
  result.textContent = cardsCollected.length;

  if (cardsCollected.length === cardArray.length / 2) {
    result.textContent = 'Congratulations you fonund them all!';
    stopTimer();
  }
}

function flipCard() {
  const cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  //   console.log(cardsChosenIds);
  //   console.log(cardsChosen);
  //   console.log('clicked', cardId);
  this.setAttribute('src', cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

const modal = document.querySelector('.modal');

//* clicker
const clickCounter = document.querySelector('#clicker');
clickCounter.textContent = '0';
let clicker = 0;

grid.addEventListener('click', () => {
  clicker++;
  clickCounter.textContent = clicker.toString();
});

// *Clock
const clock = document.querySelector('#time');
const btnStart = document.querySelector('#start');
const btnRestart = document.querySelector('#reset');
let counter = 0;
let interval = null;
clock.textContent = '00:00:00';
//* timer function for updating clock
timer = () => {
  counter++;

  let hrs = Math.floor(counter / 3600);
  let min = Math.floor((counter - hrs * 60 * 60) / 60);
  let sec = counter % 60;

  clock.textContent = `${hrs.toString().padStart(2, '0')}:${min
    .toString()
    .padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
};

startTimer = () => {
  if (interval) {
    return;
  }

  interval = setInterval(timer, 1000);
};

stopTimer = () => {
  clearInterval(interval);
  interval = null;
};

btnStart.addEventListener('click', function (e) {
  e.preventDefault();
  modal.classList.toggle('hidden');
  startTimer();
});

btnRestart.addEventListener('click', function (e) {
  e.preventDefault();
  clock.textContent = '00:00:00';
  result.textContent = '0';
  clickCounter.textContent = '0';
  clicker = 0;
  counter = 0;
  cardsChosen = [];
  cardsChosenIds = [];
  cardsCollected = [];
  stopTimer();
  modal.classList.toggle('hidden');
  grid.innerHTML = '';
  createBoard();
});
