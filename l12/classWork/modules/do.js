class DoSmht {
    constructor() {
        DoSmht.dosmth();
    }

    static dosmth(hours) {
        if (hours > 6 && hours < 20) console.log('show');
        else console.log('no-show')
    }
}

module.exports.DoSmht = DoSmht;