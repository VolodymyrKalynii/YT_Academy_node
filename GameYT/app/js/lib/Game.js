let gameInstance = null;

export class Game {
    constructor() {
        if (!gameInstance) gameInstance = this;

        this.counter = 0;

        return gameInstance;
    }

    /**
     * @return {number}
     * @public
     */
    getCounter() {
        return ++this.counter;
    }

    /**
     *
     * @param {{}} params
     * @return {HTMLElement}
     * @public
     */
    static printElems(params) {
        return Game.__factory(params);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @param {{}} params
     * @return {HTMLElement}
     * @private
     */
    static __factory(params) {
        const colors = params.colors;
        const lineSize = params.lineSize;
        const blockStyles = params.blockStyles;
        const W = params.W;
        const parentBlock = document.createElement('DIV');

        for (let i = 0; i < lineSize; i++) {
            const block = Game.__createBlock('div', blockStyles);
            //block.style.top = `${H * i}px`;
            block.style.left = `${W * i}px`;
            block.style.backgroundColor = `rgb(
                ${(Math.abs(colors.red.from - colors.red.to) / (lineSize - 1)) * (i + 1)}, 
                ${(Math.abs(colors.green.from - colors.green.to) / (lineSize - 1)) * (i + 1)}, 
                ${(Math.abs(colors.blue.from - colors.blue.to) / (lineSize - 1)) * (i + 1)}
            )`;

            parentBlock.appendChild(block);
        }

        return parentBlock;
    }

    /**
     *
     * @param {string} type
     * @param {{}} styles
     * @return {HTMLElement}
     * @private
     */
    static __createBlock(type, styles) {
        const block = document.createElement(type);

        for (const key in styles) block.style[key] = styles[key];

        return block;
    }
}
