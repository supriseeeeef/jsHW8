const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';
for (let i = 0; i < friends.length; i++) {
  string += friends[i];
  if (i < friends.length - 1) {
    string += ', ';
  }
}
console.log(string);

const friends1 = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
const string1 = friends.join(', ');

console.log(string1);



const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5'];
console.log(cards)
cards.splice(cards.indexOf('Карточка-3'), 1);
console.log(cards)
cards.push('Карточка-6');
console.log(cards)
cards[cards.indexOf('Карточка-4')] = 'Оновлена-Карточка-4';
console.log(cards);