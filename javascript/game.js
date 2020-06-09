class game {
    constructor() {
        this.way_list = [];
        this.preNumber = 0;
        this.tag = null;
        this.width = GAME_WIDTH;
        this.height = GAME_HEIGH;
        this.board = null;
        this.data_board = 2;
        this.init();

    }
    init() {
        this.tag = document.createElement('div');
        this.tag.className = 'game';
        this.tag.id = 'game';
        this.tag.style.width = this.width + "px";
        this.tag.style.height = this.height + "px";
        this.initDataBoard();
        this.board = new board(this, this.data_board);

        document.body.appendChild(this.tag);

    }
    update() {

    }
    loop() {

    }
    draw() {

    }
    initDataBoard() {
        this.data_board = data.game;
    }
    addNumberToWayList(dot) {
        this.way_list.push(dot);
        this.preNumber = dot.text;
    }
    popWayList() {
        this.reset();
        this.preNumber--;
        this.way_list.pop();
    }
    checkNumber(dot) {
        var number = dot.text;
        if (this.preNumber + 1 == number) {
            this.addNumberToWayList(dot);
            return true;
        } else {
            return false;
        }
    }
    next(dot) {
        this.board.setNextCanClick(dot);
    }
    reset() {
        var i = 1;
        if (this.way_list.length >= 2) {
            i = 2;
        }
        if (this.way_list.length > 1) {
            var preDot = this.way_list[this.way_list.length - i];
            this.board.setNextCanClick(preDot);
            preDot.setStatus();

        } else {
            this.board.reset();

        }
    }


}
var GAME = new game();