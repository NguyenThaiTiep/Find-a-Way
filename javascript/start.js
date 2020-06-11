class start {
    constructor(main) {
        this.main = main;
        this.render();
    }

    render() {
        this.tag = document.createElement('div');
        this.tag.className = "start";
        this.tag.innerHTML = `<div class = 'frame-btn'>
                                <button class = 'start-btn'></button>
                                <button class = 'exit-btn '></button>
                              </div>`
        this.main.tag.appendChild(this.tag)
    }
}