class complete {
    constructor(main) {
        this.main = main;
        this.tag = null;
        this.score = main.game.score;
        this.init();
    }
    init() {
        this.tag = document.createElement('div');
        this.tag.className = 'complete';
        this.main.tag.appendChild(this.tag);
        this.initScore();
        this.initReplay();
    }
    initScore() {
        this.score_tag = document.createElement('div');
        this.score_tag.className = "score-com"
        this.score_tag.innerHTML = `<span> YOUR SCORE : ${this.score}</span>`;
        this.tag.appendChild(this.score_tag);
    }
    initReplay() {
        this.replay = document.createElement('a');
        this.replay.className = "replay-a";
        this.replay.href = "/index.html";
        this.replay.innerHTML = `<div class= 'replay'> </div>`;
        this.tag.appendChild(this.replay);
    }
}