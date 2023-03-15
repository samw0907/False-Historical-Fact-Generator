const histFigure = ['Abraham Lincoln ', 'Gandhi ', 'Yoda ', 'Cleopatra ', 'Steve Irwin ', 'Winnie The Pooh ', 'Joseph Stalin ', 'King Charles ']
const histAct = ['fought at ', 'celebrated ', 'attended ', 'was a supporter of ', 'encouraged the creation of ', 'was puzzled by ', 'was delighted by ', 'was gravely concerned by ']
const histEvent = ['the treaty of versaille in 1098.', 'world war two in 2001.', 'the battle of Normandy in 200BC.', 'the creation of the internet in 1901.', 'the French revolution in 1790.', 'the outbreak of Plauge in Europe in 300.', 'the coronation of Darth Vader in 1788.', 'the failed invasion of Martian forces in 1988.']
const histFigTwo = ["their mother", "their wife", "their pet tortoise", "Donalnd Trump", "James Bond", "Jesus", "Zoltan, our Lord and Saviour", "Pep Guardiola"]
const histResponse = ['"Hurrah!"', '"Well, Ok then."', '"Thats the way the cookie crumbles."', '"Are you sure thats a good idea?"', '"If life gives you lemons..."', '"Next time, maybe ask me first!"', '"I just want pizza dude."', '"Could be worse!"']
const histNext = ['had a big pizza party.', 'went to the moonn', 'fell asleep watching tv.', 'baked brownies.', 'rode of into the sunset.', 'played twister.', 'took the matter to the Haugue.', 'proposed the resoloution to the UN.']

let numGen1 = Math.floor(Math.random() * 8);
// console.log(numGen1);
let numGen2 = Math.floor(Math.random() * 8);
// console.log(numGen2);
let numGen3 = Math.floor(Math.random() * 8);
// console.log(numGen3);

let numGen4 = Math.floor(Math.random() * 8);
// console.log(numGen4);
let numGen5 = Math.floor(Math.random() * 8);
// console.log(numGen5);
let numGen6 = Math.floor(Math.random() * 8);
// console.log(numGen6);

console.log(histFigure[numGen1] + histAct[numGen2] + histEvent[numGen3] + " When they informed " + histFigTwo[numGen4] + ", they responded " + histResponse[numGen5] + " Then they all " + histNext[numGen6]);
