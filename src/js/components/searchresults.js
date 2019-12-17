export class searchresults {
    constructor() {
        this.propertyResults = null;
        this.articleResults = null;
        this.propertyButton = null;
        this.articleButton = null;
    }

    getElements(){
        this.propertyResults = document.getElementById("p-results");
        this.articleResults = document.getElementById("a-results");
        this.propertyButton = document.getElementById('p-link');
        this.articleButton = document.getElementById('a-link');
    }

    getTarget(element){
        let target = element.dataset.target;
        this.setActiveTarget(target);
    }

    setActiveTarget(state) {
        if(state === "property") {
            this.propertyResults.classList.add('is-active');
            this.articleResults.classList.remove("is-active");
            this.propertyButton.classList.add('is-active-tab');
            this.articleButton.classList.remove('is-active-tab');
        } else {
            this.propertyResults.classList.remove('is-active');
            this.articleResults.classList.add("is-active");
            this.propertyButton.classList.remove('is-active-tab');
            this.articleButton.classList.add('is-active-tab');
        }
    }

    bindElements() {
        this.propertyButton.addEventListener('click', () => {    
            this.getTarget(this.propertyButton);
        });

        this.articleButton.addEventListener('click', () => {
            this.getTarget(this.articleButton);
        });
    }

    init() {
        this.getElements();
        this.bindElements();
    }
}