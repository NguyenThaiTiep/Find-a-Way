class menu {
    constructor(main) {
        this.main = main;
        this.tag = null;

        this.button_back = null;
        this.score_tag = null;
        this.score = 0;
        //add button here
        this.init();
    }
    init() {
        this.tag = document.createElement('div');
        this.tag.className = "menu";
        this.main.tag.appendChild(this.tag);
        this.initButton();
        this.initVolumeButtonDown();
        this.initVolumeButtonUp();

        this.initScore();

    }
    HandleOnClick() {

    }
    initButton() {
        this.button_back = document.createElement('div');
        this.button_back.className = 'new-game'
        this.button_back.textContent = "New Game";
        this.tag.appendChild(this.button_back);
        this.button_back.onclick = () => {
            this.main.reset();
        }
    }
    initScore() {
        this.score_tag = document.createElement('div');
        this.score_tag.className = "score";
        this.score_tag.innerHTML = `<span> SCORE  : ${ this.score } </span>`
        this.tag.appendChild(this.score_tag);
    }
    initVolumeButtonUp() {
        this.volumeButtonUp = document.createElement('div');
        this.volumeButtonUp.className = 'volume'
        this.volumeButtonUp.innerHTML = `<i class="fa fa-volume-up" aria-hidden="true"></i>`;
        this.tag.appendChild(this.volumeButtonUp);
        this.volumeButtonUp.addEventListener('click', (event) => {
            this.main.game.VolumeUp();
        })
    }
    initVolumeButtonDown() {
        this.volumeButtonDown = document.createElement('div');
        this.volumeButtonDown.className = 'volume';
        this.volumeButtonDown.innerHTML = `<i class="fa fa-volume-down" aria-hidden="true"></i>`;
        this.tag.appendChild(this.volumeButtonDown);
        this.volumeButtonDown.addEventListener('click', (event) => {
            this.main.game.VolumeDown();
        })
    }

    update() {
        this.score_tag.innerHTML = `<span> SCORE: ${ this.score } </span>`;
    }
}