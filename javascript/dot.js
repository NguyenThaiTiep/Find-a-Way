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
                            this.setStatus()
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

}