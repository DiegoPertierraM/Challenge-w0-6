const getRandomNumber = () => {
  const randomNumber = Math.trunc(Math.random() * 53);
};

export const generateCardGame = () => {
  const espadas = [];
  const picas = [];
  const treboles = [];
  const corazones = [];
  for (let i = 2; i < 15; i++) {
    espadas.push({ number: i, suit: 'espadas', drawn: false });
    picas.push({ number: i, suit: 'picas', drawn: false });
    treboles.push({ number: i, suit: 'treboles', drawn: false });
    corazones.push({ number: i, suit: 'corazones', drawn: false });
  }
  const cardArray = [...espadas, ...picas, ...treboles, ...corazones];
  return cardArray;
};
