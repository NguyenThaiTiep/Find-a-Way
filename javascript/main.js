class main {
    constructor() {
        this.game = null;
        this.tag = null;
        this.menu = null;
        this.complete = null;
        this.init();
    }
    init() {
        this.tag = document.createElement('div');
        this.tag.className = 'main';
        document.body.appendChild(this.tag)
        this.initComponent();
        this.initStart();
        this.loop();
    }
    initComponent() {
        this.initMenu();
        this.initGame();
    }
    initGame() {
        this.game = new game(this);
    }
    initMenu() {
        this.menu = new menu(this);
    }
    initComplete() {
        this.complete = new complete(this);
    }
    initStart() {
        this.start = new start(this);
    }
    loop() {
        setInterval(() => {
            this.update();
        }, 300);
    }
    update() {
        this.menu.score = this.game.score;
        this.menu.update();
    }
    reset() {
        this.tag.innerHTML = '';
        this.initComponent();
    }

}