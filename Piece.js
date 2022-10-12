
class Piece{

    position;

    moves;
    

    constructor(position, moves) {
        this.position = position;
        this.moves = moves;
    }

    get position() {
        return this._position;
    }

    set position(pos) {
        this._position = pos;
    }

    get moves() {
        return this._moves;
    }

    set moves(arr) {
        this._moves = arr;
    }
}

export default Piece;