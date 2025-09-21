export default class Player {
    /**
     *
     * @param {string} name - player name
     * @param {string} score - player score
     * @param {*} nan - player choice if made. used to store externally and for validating game state.
     */
    constructor(name, score, nan) {
        this.name = name;
        this.score = score;
        this.choice = nan;
    }

    info() {
        console.log(`Player name: ${this.name}`);
        console.log(`Player score: ${this.score}`);
        console.log(`Player choice: ${this.choice}`);
    }
}
