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
const clock = document.querySelector('#time');
result.textContent = '0';
let cardsChosen = [];
let cardsChosenIds = [];
let cardsCollected = [];

cardArray.sort(() => 0.5 - Math.random());
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
  const cards = document.querySelectorAll('img');
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];

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
    clearInterval();
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

clock.textContent = '00:00';

grid.addEventListener('click', counter, { once: true });

console.log(cardsChosen);

let sec = 0;
let min = 0;
function counter() {
  setInterval(function () {
    sec++;
    clock.textContent = `${min.toString().padStart(2, '0')}:${sec
      .toString()
      .padStart(2, '0')}`;
  }, 1000);
}

const modal = document.querySelector('.modal');
const btnStart = document.querySelector('#start');

btnStart.addEventListener('click', function (e) {
  e.preventDefault();
  modal.classList.toggle('hidden');
});

const btnRestart = document.querySelector('#reset');

btnRestart.addEventListener('click', function (e) {
  e.preventDefault();
  clock.textContent = '00:00';
  sec = 0;
  min = 0;
  cardsChosen = [];
  cardsChosenIds = [];
  cardsCollected = [];
});
