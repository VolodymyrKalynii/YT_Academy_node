// import {Game} from "./lib/Game";
//
// const W = 60;
// const H = 100;
// const blockStyles = {
//     width: `${W}px`,
//     height: `${H}px`,
//     position: 'absolute'
// };
//
// const colors = {
//     red: {
//         from: 255,
//         to: 0
//     },
//     green: {
//         from: 100,
//         to: 200
//     },
//     blue: {
//         from: 200,
//         to: 0
//     }
// };
//
// const lineSize = 6;
//
// const params = {
//     colors, lineSize, blockStyles, W
// };
//
// const game1 = new Game();
// const game2 = new Game();
//
// document.body.appendChild(Game.printElems(params));
//
// console.log(game1.getCounter());
// console.log(game2.getCounter());
// console.log(game1.getCounter());


// const arrW = 6;
// const arrH = 4;
// const corners = [0, 200, 50, 100];
//
// (function () {
//     const colors = [];
//
//     for (let i = 0; i < arrH; i++) {
//         colors[i] = [];
//         for (let j = 0; j < arrW; j++) {
//
//         }
//     }
// })();

class Game {
    constructor() {
        this.arrW = 6;
        this.arrH = 4;
        this.corners = [0, 200, 50, 100];
    }

    generateColors() {
        const colors = [];
        const left = [];
        const right = [];

        for (let i = 0; i < this.arrH; i++) {
            colors[i] = [];
            for (let j = 0; j < this.arrW; j++) {

            }
        }
    }

    step(from, to, size) {
        return (to - from) / size - 1;
    }
}