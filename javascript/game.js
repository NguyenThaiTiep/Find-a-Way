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
        this.initRabbit();
        this.board = new board(this, this.data_board);
        this.initCarrot();
        document.body.appendChild(this.tag);

    }
    update() {

    }
    loop() {

    }
    draw() {

    }
    initDataBoard() {
        var index = Math.floor(Math.random() * data.game.length)
        this.data_board = data.game[index];
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

    initRabbit() {
        var rabbit = document.createElement('div');
        rabbit.className = "rabbit";
        var row = this.data_board.start.row - 5;
        rabbit.style.marginTop = row * DOT_SIZE * 2 + "px";
        this.tag.appendChild(rabbit);
    }
    initCarrot() {
        var carrot = document.createElement('div');
        carrot.className = "carrot";
        var row = this.data_board.end.row - 5;
        carrot.style.marginTop = row * DOT_SIZE + "px";
        this.tag.appendChild(carrot);
    }

}
var GAME = new game();