class rabbit {
    constructor(board, row, col) {
        this.tag = null;
        this.board = board;
        this.row = row;
        this.col = col;
        this.init();
    }
    init() {
        this.tag = document.createElement('div');
        this.tag.className = "rabbit";

    }

}