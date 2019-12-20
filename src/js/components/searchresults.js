export class searchresults {
    constructor() {
        this.tabResults = null;
        this.tabLink = null;
        this.searchResults = null;
    }

    getElements(){ 
        this.tabResults = Array.from(document.querySelectorAll('.js-tab-results'));
        this.tabLink = Array.from(document.querySelectorAll('.js-tab-link'));
        this.searchResults = document.getElementById('js-search-results');
    }

    getTarget(element){
        let activeTab = element.dataset.target;
        this.setActiveTarget(activeTab, element);
    }

    resetActive(tabs){
        tabs.forEach((element) => {
            element.classList.remove('is-active');
            
        });
    }

    setActiveTarget(target, targetTab) {
        let elementType = this.searchResults.querySelector("[data-targetEL='" + target + "' ]");

        this.resetActive(this.tabResults);
        this.resetActive(this.tabLink);

        elementType.classList.add("is-active");
        targetTab.classList.add("is-active");
    }

    bindElements() {
        this.tabLink.forEach((element) => {
            element.addEventListener('click', () =>{
                this.getTarget(element);
                console.log(element);
            });

        });
    }

    init() {
        this.getElements();
        this.bindElements();
    }
}