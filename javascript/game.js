class game {
    constructor(parent) {
        this.way_list = [];
        this.parent = parent;
        this.preNumber = 0;
        this.tag = null;
        this.width = GAME_WIDTH;
        this.height = GAME_HEIGH;
        this.board = null;
        this.data_board = 2;
        this.init();
        this.score = 0;
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
        this.parent.tag.appendChild(this.tag);
        this.setWinSound();
        this.startMusicGame();

    }

    initDataBoard() {
        this.score = 0;
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
        this.score = (this.score - 100 >= 0) ? (this.score - 100) : 0;
    }
    checkNumber(dot) {
        var number = dot.text;
        if (this.preNumber + 1 == number) {
            this.addNumberToWayList(dot);
            this.score += 100;
            return true;
        } else {
            this.score = (this.score - 50 >= 0) ? (this.score - 50) : 0;
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
        this.rabbit = document.createElement('div');
        this.rabbit.className = "rabbit";
        var row = this.data_board.start.row - 5;
        this.rabbit.style.marginTop = row * DOT_SIZE * 2 + "px";
        this.tag.appendChild(this.rabbit);
    }
    initCarrot() {
        this.carrot = document.createElement('div');
        this.carrot.className = "carrot";
        var row = this.data_board.end.row - 4.5;
        this.carrot.style.marginTop = row * DOT_SIZE * 2 + "px";
        this.tag.appendChild(this.carrot);
    }
    JumpToCarrot() {
        var i = 0;
        this.rabbit.style.background = 'unset';
        var jump = setInterval(() => {
            if (i == 20) {
                this.audio_game.play();
                this.carrot.classList.add('rabbit-3')
                this.way_list[i - 1].setBackGroundImgFoot();

                setTimeout(() => {
                    this.parent.initComplete();
                }, 2000);
                clearInterval(jump);
            } else {
                this.way_list[i].setBackGroundImgRabbit();
                if (i - 1 >= 0) {
                    this.way_list[i - 1].setBackGroundImgFoot();
                }

                i++;
            }

        }, 500);
    }
    setWinSound() {
        this.audio_game = new Audio("./audio/win_game.mp3")
    }
    startMusicGame() {
        this.game_music = new Audio("./audio/nhac_nen.mp3")
        this.game_music.loop = true;
        this.game_music.volume = 0.08;
        this.game_music.play();
    }

}