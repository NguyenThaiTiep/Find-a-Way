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
        this.initScore();

    }
    HandleOnClick() {

    }
    initButton() {
        this.button_back = document.createElement('div');
        this.button_back.className = 'new-game'
        this.button_back.textContent = "New Game";
        this.tag.appendChild(this.button_back);
        this.tag.onclick = () => {
            this.main.reset();
        }
    }
    initScore() {
        this.score_tag = document.createElement('div');
        this.score_tag.className = "score";
        this.score_tag.innerHTML = `<span> SCORE  : ${ this.score } </span>`
        this.tag.appendChild(this.score_tag);
    }

    update() {
        this.score_tag.innerHTML = `<span> SCORE: ${ this.score } </span>`;
    }
}