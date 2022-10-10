
class Chessboard {

    board;

    constructor(size) {

        this.board = this.buildBoard(size);
        
    }

    buildBoard(size) {
        const board = [];

        for (let i = 0; i < size; i++){
            board.push([]);
            for (let j = 0; j < size; j++){
                board[i].push(j);
            }
        }
        return board;
    }

    printBoard() {
        for (let i = 0; i < this.board.length; i++){
            let row = '';
            for (let j = 0; j < this.board.length; j++){
                row += `( ${i},${this.board[i][j]} ) `;
            }
            console.log(row);
        }
    }
}

const testBoard = new Chessboard(8);

testBoard.printBoard();