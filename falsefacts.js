const histFigure = ['Abraham Lincoln ', 'Gandhi ', 'Yoda ', 'Cleopatra ', 'Steve Irwin ', 'Winnie The Pooh ', 'Joseph Stalin ', 'King Charles ']
const histAct = ['fought at ', 'celebrated ', 'attended ', 'was a supporter of ', 'encouraged the creation of ', 'was puzzled by ', 'was delighted by ', 'was gravely concerned by ']
const histEvent = ['the treaty of versaille in 1098.', 'world war two in 2001.', 'the battle of Normandy in 200BC.', 'the creation of the internet in 1901.', 'the French revolution in 1790.', 'the outbreak of Plauge in Europe in 300.', 'the coronation of Darth Vader in 1788.', 'the failed invasion of Martian forces in 1988.']


let numGen1 = Math.floor(Math.random() * 8);
// console.log(numGen1);
let numGen2 = Math.floor(Math.random() * 8);
// console.log(numGen2);
let numGen3 = Math.floor(Math.random() * 8);
// console.log(numGen3);


console.log(histFigure[numGen1] + histAct[numGen2] + histEvent[numGen3]);
