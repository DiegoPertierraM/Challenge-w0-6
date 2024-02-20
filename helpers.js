const shuffleArray = (arr) => {
  let shuffledArr = arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return shuffledArr;
};

const getRandomNumber = (maxNum) => {
  const randomNumber = Math.trunc(Math.random() * maxNum);
  return randomNumber;
};

const pickRandomCard = (arr) => {
  let randomNumber = getRandomNumber(arr.length);
  const card = arr[randomNumber];
  arr.splice(arr[randomNumber], 1);
  return card;
};

const generateCardArray = () => {
  const diamonds = [
    { name: 'A', number: 13, suit: 'diamantes' },
    { name: 'K', number: 12, suit: 'diamantes' },
    { name: 'Q', number: 11, suit: 'diamantes' },
    { name: 'J', number: 10, suit: 'diamantes' },
  ];
  const spades = [
    { name: 'A', number: 13, suit: 'picas' },
    { name: 'K', number: 12, suit: 'picas' },
    { name: 'Q', number: 11, suit: 'picas' },
    { name: 'J', number: 10, suit: 'picas' },
  ];
  const clubs = [
    { name: 'A', number: 13, suit: 'treboles' },
    { name: 'K', number: 12, suit: 'treboles' },
    { name: 'Q', number: 11, suit: 'treboles' },
    { name: 'J', number: 10, suit: 'treboles' },
  ];
  const hearts = [
    { name: 'A', number: 13, suit: 'corazones' },
    { name: 'K', number: 12, suit: 'corazones' },
    { name: 'Q', number: 11, suit: 'corazones' },
    { name: 'J', number: 10, suit: 'corazones' },
  ];
  for (let i = 2; i < 11; i++) {
    diamonds.push({ name: i, number: i, suit: 'diamantes' });
    spades.push({ name: i, number: i, suit: 'picas' });
    clubs.push({ name: i, number: i, suit: 'treboles' });
    hearts.push({ name: i, number: i, suit: 'corazones' });
  }
  const cardArray = [...diamonds, ...spades, ...clubs, ...hearts];
  return cardArray;
};

const solveRound = (userChoice, machineCard, actualCard) => {
  const messages = [
    `Ganaste! La carta era ${actualCard.name} de ${actualCard.suit}`,
    `Perdiste. La carta era ${actualCard.name} de ${actualCard.suit}`,
  ];
  let matchIncrement = 0;
  let scoreIncrement = 0;
  let message = '';
  switch (userChoice) {
    case 'mayor':
      if (actualCard.number > machineCard.number) {
        message = messages[0];
        scoreIncrement++;
      } else {
        message = messages[1];
      }
      matchIncrement++;
      break;
    case 'menor':
      if (actualCard.number < machineCard.number) {
        message = messages[0];
        scoreIncrement++;
      } else {
        message = messages[1];
      }
      matchIncrement++;
      break;
    default:
      matchIncrement++;
  }
  return { scoreIncrement, matchIncrement, message };
};

export const playCardGame = () => {
  const cardArray = shuffleArray(generateCardArray());
  let score = 0;
  let match = 0;
  const byeMessage = `Tu puntuación ha sido ${score} aciertos en ${match} rondas. Hasta la próxima!`;

  let userName = prompt(
    'Bienvenido! Introduce tu nombre de usuario si deseas jugar:'
  );
  if (userName === null) {
    return 'Hasta la próxima!';
  }
  if (userName === '' || userName === ' ') {
    userName = 'jugador';
  }

  alert(`Bienvenido ${userName}! Las reglas del juego son las siguientes:
  A cada turno, se extraerá una carta de la baraja francesa, y se te preguntará
  si crees que la siguiente carta en el mazo va a ser mayor o menor.
  Si aciertas, se te sumará un punto a tu puntuación.
  En cualquier momento puedes darle a cancelar y parar el juego.`);
  let playAgain = true;
  // ---> Usar do while mejor
  while (playAgain === true) {
    const machineCard = pickRandomCard(cardArray);
    alert(`La carta es el ${machineCard.name} de ${machineCard.suit}`);
    const userChoice = prompt(
      '¿Crees que la siguiente carta será mayor o menor?'
    );
    if (userChoice === null) {
      playAgain = false;
      return alert(byeMessage);
    }
    const actualCard = pickRandomCard(cardArray);
    const roundInfo = solveRound(userChoice, machineCard, actualCard);
    score += roundInfo.scoreIncrement;
    match += roundInfo.matchIncrement;
    alert(roundInfo.message);
  }
  return alert(byeMessage);
};
