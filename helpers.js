function shuffleArray(arr) {
  let shuffledArr = arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return shuffledArr;
}

const getRandomNumber = (maxNum) => {
  const randomNumber = Math.trunc(Math.random() * maxNum);
  return randomNumber;
};

const pickRandomCard = (arr) => {
  let randomNumber = getRandomNumber(arr.length);
  console.log(
    `La carta es ${arr[randomNumber].number} de ${arr[randomNumber].suit}`
  );
  arr.splice(arr[randomNumber], 1);
  return arr[randomNumber].number;
};

export const generateCardArray = () => {
  const diamantes = [
    { number: 'A', suit: 'diamantes' },
    { number: 'K', suit: 'diamantes' },
    { number: 'Q', suit: 'diamantes' },
    { number: 'J', suit: 'diamantes' },
  ];
  const picas = [
    { number: 'A', suit: 'picas' },
    { number: 'K', suit: 'picas' },
    { number: 'Q', suit: 'picas' },
    { number: 'J', suit: 'picas' },
  ];
  const treboles = [
    { number: 'A', suit: 'treboles' },
    { number: 'K', suit: 'treboles' },
    { number: 'Q', suit: 'treboles' },
    { number: 'J', suit: 'treboles' },
  ];
  const corazones = [
    { number: 'A', suit: 'corazones' },
    { number: 'K', suit: 'corazones' },
    { number: 'Q', suit: 'corazones' },
    { number: 'J', suit: 'corazones' },
  ];
  for (let i = 2; i < 11; i++) {
    diamantes.push({ number: i, suit: 'diamantes' });
    picas.push({ number: i, suit: 'picas' });
    treboles.push({ number: i, suit: 'treboles' });
    corazones.push({ number: i, suit: 'corazones' });
  }
  const cardArray = [...diamantes, ...picas, ...treboles, ...corazones];
  return cardArray;
};

export const playCardGame = () => {
  const cardArray = shuffleArray(generateCardArray());
  return pickRandomCard(cardArray);
};
