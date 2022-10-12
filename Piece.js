
class Piece{


    moves;
    

    constructor(position, moves) {
        this.moves = moves;
    }

    get moves() {
        return this._moves;
    }

    set moves(arr) {
        this._moves = arr;
    }
}

export default Piece;