class dot {
    constructor(board, col, row, text, game) {
        this.canClick = false;
        this.game = game;
        this.status = 1;
        this.board = board;
        this.col = col;
        this.row = row;
        this.text = text;
        this.tag = null;
        this.size = DOT_SIZE;
        this.init();
        this.audio_win = new Audio('./ting.mp3');
        this.audio_wrong = new Audio('./wrong.mp3');
        this.setSound();
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
    }
    update() {

    }
    dotListenMouserEvent() {
        this.tag.addEventListener('click', (event) => {
            if (this.canClick) {
                switch (this.status) {
                    case 1:
                        if (this.game.checkNumber(this)) {
                            this.tag.classList.add("active");
                            this.game.next(this);
                            this.setStatus();
                            this.audio_win.play();
                            if (this.text == 20) {
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
        this.audio_win.oncanplaythrough = function() {
            this.audio_win.play();
        }
        this.audio_wrong.oncanplaythrough = function() {
            this.audio_wrong.play();
        }
    }
    setBackGroundImg() {
        this.tag.classList.add('foot');
        this.tag.innerHTML = '';
    }

}