class dot {
    constructor(board, col, row, text, game) {
        this.canClick = false;
        this.game = game;
        this.status = 1;
        this.board = board;
        this.col = col;
        this.row = row;
        this.initText(text);
        this.tag = null;
        this.size = DOT_SIZE;

        this.audio_win = new Audio('./audio/ting.mp3');
        this.audio_wrong = new Audio('./audio/wrong.mp3');
        this.init();
        this.dotListenMouserEvent();
    }

    init() {
        this.tag = document.createElement('div');
        this.tag.className = 'item';
        this.tag.style.width = this.size + 'px';
        this.tag.style.height = this.size + 'px';

        this.tag.style.top = this.size * this.row + 'px';
        this.tag.style.left = this.size * this.col + 'px';
        this.tag.id = 'item';
        this.tag.innerHTML = `<span>${this.text} </span>`;
        this.board.appendChild(this.tag);
        this.setSound();
    }
    dotListenMouserEvent() {
        this.tag.addEventListener('click', (event) => {
            if (this.canClick) {
                switch (this.status) {
                    case 1:
                        if (this.game.checkResult(this)) {
                            this.tag.classList.add("active");
                            this.game.next(this);
                            this.setStatus();
                            this.audio_win.play();
                            if (this.game.checkWinGame()) {
                                this.game.board.setCanNotClick();
                                this.game.JumpToCarrot();
                            }
                        } else {
                            this.audio_wrong.play();
                        }
                        break;
                    case -1:
                        this.tag.classList.remove("active");
                        this.game.popWayList();
                        break;
                    default:
                        break;
                }
            } else {
                console.log('cannot');
            }
        })
    }
    setStatus() {
        this.status = -this.status;
    }
    setCanClick(canClick) {
        this.canClick = canClick;
    }
    setSound() {
        this.audio_wrong.volume = 0.08;
        this.audio_win.volume = 0.3;
    }
    setBackGroundImgFoot() {
        this.tag.classList.remove("rabbit-2");
        this.tag.classList.add('foot');
        this.tag.innerHTML = '';
    }
    setBackGroundImgRabbit() {
        this.tag.classList.remove("foot");
        this.tag.classList.add('rabbit-2');
        this.tag.innerHTML = '';
    }
    initText(text) {
        this.text = text;
        if (this.text === __) {
            switch (this.game.mode) {
                case "number":
                    this.text = Math.floor(Math.random() * 20)
                    break;
                case "character":
                    var num = Math.floor(Math.random() * Characters.length);
                    this.text = Characters.charAt(num);
                    break;
            }

        }
    }

}