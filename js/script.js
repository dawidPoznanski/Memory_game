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

const cardChosen = [];

cardArray.sort(() => 0.5 - Math.random());
console.log(cardArray);

const grid = document.querySelector('.grid');

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

function flipCard() {
  const cardId = this.getAttribute('data-id');
  cardChosen.push(cardArray[cardId].name);
  console.log('clicked', cardId);
  console.log(cardChosen);
}
