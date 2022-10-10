
class Knight{

    position;

    moves = [
        [-2, -1],
        [-2, 1], 
        [-1, -2], 
        [-1, 2], 
        [1, -2], 
        [1, 2], 
        [2, -1], 
        [2, 1]
    ]
    

    constructor(position) {
        this.position = position;
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