export class navcontent {
    constructor() {
        this.navTabs = null;
        this.navResults = null;
        this.navContent = null;
    }

    getElements(){ 
        this.navResults = Array.from(document.querySelectorAll('.js-navcontent-results'));
        this.navTabs = Array.from(document.querySelectorAll('.js-tabssslink'));
        navContent = document.getElementById('js-nav-results');
    }

    getTarget(element){
        let activeTab = element.dataset.target;
        this.setActivebtarget(activeTab, element);
    }

    resetActive(tabs) {
        tabs.forEach((element) => {
            element.classList.remove('is-active');
        });
    }

    setActiveTarget(target, targetTab) {
        let elementType = this.navContent.querySelector("[data-targetEL='" + target + "' ]");

        this.resetActive(this.navResults);
        this.resetActive(this.navTabs);

        elementType.classList.add("is-active");
        targetTab.classList.add("is-active");
        console.log(element);
    }

    bindElements() {
        this.navTabs.forEach((element) => {
            element.addEventListener('mouseover', () => {
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