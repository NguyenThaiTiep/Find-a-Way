class board {
    constructor(game, data_game) {
        this.dots = [];
        this.start_pos = data_game.start;
        this.end_pos = data_game.end;
        this.start_dot = null;
        this.end_dot = null;
        this.game = game;
        this.width = BOARD_WIDTH;
        this.height = BOARD_HEIGHT;
        this.board_tag = null;
        this.data = data_game.data;
        this.init();
    }
    init() {
        this.board_tag = document.createElement('div');
        this.board_tag.className = 'board';
        this.board_tag.id = 'board'
        this.board_tag.style.width = this.width + "px";
        this.board_tag.style.height = this.height + "px";
        this.initDots();
        this.game.tag.appendChild(this.board_tag);
    }
    initDots() {

        for (let row = 0; row < this.data.length; row++) {
            var dots_row = [];
            for (let col = 0; col < this.data[0].length; col++) {
                dots_row.push(new dot(this.board_tag, col, row, this.data[row][col], this.game))
            }
            this.dots.push(dots_row);

        }
        this.start = this.dots[this.start_pos.row][this.start_pos.col]
        this.end = this.dots[this.end_pos.row][this.end_pos.col]
        this.start.setCanClick(true);
    }
    update() {

    }
    draw() {

    }
    setCanNotClick() {
        this.dots.forEach(dot_array => {
            dot_array.forEach(dot => {
                dot.setCanClick(false);
            });
        });
    }
    setNextCanClick(dot) {
        var pre_row = dot.row;
        var pre_col = dot.col;
        this.setCanNotClick();
        this.checkSetClick(pre_col - 1, pre_row);
        this.checkSetClick(pre_col + 1, pre_row);
        this.checkSetClick(pre_col, pre_row - 1);
        this.checkSetClick(pre_col, pre_row + 1);
        this.checkSetClick(pre_col, pre_row);

    }
    checkSetClick(col, row) {
        if (col >= 0 && col < this.data[0].length &&
            row >= 0 && row < this.data.length) {
            if (this.dots[row][col].status = 1) this.dots[row][col].setCanClick(true);
        }
    }
    reset() {
        this.start.setCanClick(true);
        this.start.status = 1;
        console.log(this.start.canClick, this.start.status, this.start.row, this.start.col);

    }




}