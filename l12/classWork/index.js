const Do = require('./modules/do');

const fs = require('fs');

const str = 'text1234gjhgl';

// fs.writeFile('text.txt', str, function(err) {
//     if (err) throw err;

//     console.log('ok');
// });
 


// const str2 = fs.readFileSync('guide.txt', 'utf8');


// const str2 = fs.readFile('guide.txt', 'utf8', (err, data) => {
//     if (err) throw err;

//     console.log('red');
//     console.log(data);
// });

// console.log(str2);


// видалення
// fs.unlink('texts/guide.txt', (err) => {
//     try {
//         if (err) throw err;

//     console.log('file deleted');
//     } catch (e) {
//         console.log(e);
//     }
// });


//події

const events = require('events');
const emitter = new events();

// const evName = 'WakeUp';
// emitter.on(evName, function (e) {
//     console.log('woke');
// });
//
// console.log(new Date());
//
// emitter.emit(evName);
//
// const active = 'WakeUp';
// const sleep = 'sleep';
//
// emitter.on(active, function (e) {
//     console.log('woke');
// });
//
// emitter.on(sleep, function (e) {
//     console.log('sleep');
// });
//
// const hours = new Date().getHours();
//
// if (hours > 8 && hours < 22) emitter.emit(active);
// else emitter.emit(sleep);

console.log(Do.DoSmht.dosmth());

console.log('Fin');