class menu {
    constructor(main) {
        this.main = main;
        this.tag = null;

        this.button_back = null;
        //add button here
        this.init();
    }
    init() {
        this.tag = document.createElement('div');
        this.tag.className = "menu";
        this.main.tag.appendChild(this.tag);
        this.initButton();
    }
    HandleOnClick() {

    }
    initButton() {
        this.button_back = document.createElement('button');
        this.button_back.textContent = "back";
        this.tag.appendChild(this.button_back);
    }
    update() {

    }
}