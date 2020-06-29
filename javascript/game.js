class game {
    constructor(parent) {
        this.way_list = [];
        this.result_list = [];
        this.parent = parent;
        this.mode = "number";
        this.result = 1;
        this.tag = null;
        this.width = GAME_WIDTH;
        this.height = GAME_HEIGH;
        this.board = null;
        this.data_board = 2;
        this.game_music = new Audio("./audio/music_game.mp3")
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
        this.initQuestion();
        this.setWinSound();
        this.startMusicGame();
    }

    initDataBoard() {
        this.score = 0;
        var index = Math.floor(Math.random() * data.game.length)
        this.data_board = data.game[index];
        this.mode = this.data_board.mode;
        if (this.mode === "character") {
            this.result_list = this.data_board.result.replace(/\s+/g, '');
            this.result_list = this.result_list.toUpperCase();
            this.index_result = 0;
            this.result = this.result_list.charAt(0);
        }
    }
    addNumberToWayList(dot) {
        this.way_list.push(dot);
        this.result += 1;
        if (this.mode === "character") {
            this.index_result++;
            this.result = this.result_list[this.index_result];
        }
    }
    popWayList() {
        this.reset();
        this.result--;
        this.way_list.pop();
        if (this.mode == "character") {
            this.index_result--;
            this.result = this.result_list[this.index_result];

        }
        this.score = (this.score - 100 >= 0) ? (this.score - 100) : 0;
    }

    checkResult(dot) {
        var number = dot.text;
        if (this.result === number) {
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
    initQuestion() {
        var question = this.data_board.result;
        this.question_tag = document.createElement("div");
        this.question_tag.className = "question";
        switch (this.mode) {
            case "number":
                this.question_tag.innerHTML =
                    `<span> <b>Find the path from 1 to 20 </b> </span>`
                break;
            case "character":
                this.question_tag.innerHTML =
                    `<span> <b> Find the path containing <i>  "${this.data_board.result}" </i> </b></span>`
                break;
        }

        this.tag.appendChild(this.question_tag);
    }
    JumpToCarrot() {
        var i = 0;
        this.rabbit.style.background = 'unset';
        var jump = setInterval(() => {
            if (i == 20 || i == this.result_list.length && i != 0) {
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
        this.audio_game = new Audio("./audio/win_game.mp3");
        this.audio_game.volume = 0.08;
    }
    startMusicGame() {
        this.game_music.controls = 'controls'
        this.game_music.loop = true;
        this.game_music.volume = 0.05;
    }
    playMusic() {
        this.game_music.play();
    }

    VolumeUp() {
        if (this.game_music.volume < 0.1) {
            this.game_music.volume += 0.01;
            console.log("volume : ", this.game_music.volume);

        }
    }
    VolumeDown() {
        if (this.game_music.volume >= 0.01) {
            this.game_music.volume -= 0.01;
            if (this.game_music.volume < 0.01) this.game_music.volume = 0;
            console.log("volume : ", this.game_music.volume);
        }

    }
    setMode(mode) {
        this.mode = mode;
    }
    checkWinGame() {
        var res = false;
        switch (this.mode) {
            case "number":
                res = (this.result == 21);
                break;
            case "character":
                res = (this.index_result == this.result_list.length);
                break;
        }
        return res;
    }

}