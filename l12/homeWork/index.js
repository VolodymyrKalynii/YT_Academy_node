const husband = require('./husband');
const fs = require('fs');

husband1 = new husband.Husband();

const salary = husband1.getSalary();
const friends = husband1.getFriends();
const sober = husband1.getSober();

fs.unlink('logs/log.txt', (err) => {
    try {
        if (err) throw err;

        console.log('file deleted');
    } catch (e) {
        console.log(e);
    }
});

fs.appendFile('logs/log.txt', salary, function(err) {
    if (err) throw err;

    console.log('ok');
});

fs.appendFile('logs/log.txt', friends, function(err) {
    if (err) throw err;

    console.log('ok');
});

fs.appendFile('logs/log.txt', sober, function(err) {
    if (err) throw err;

    console.log('ok');
});

console.log('Fin');