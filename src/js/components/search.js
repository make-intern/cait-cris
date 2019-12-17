export class search{
    constructor(){
        this.searchField = null;
        this.searchButton = null;
        this.searchClose = null;
        this.mainNav = null;
    }

    getElements(){
        this.searchButton = document.getElementById('js-search__button');
        this.searchField = document.getElementById('js-search__field');
        this.searchClose = document.getElementById('js-closeSearch');
        this.mainNav = document.getElementById('js-nav');
        console.log(this.searchButton);
    }
    
    checkState(element){
        if(element.classList.contains('is-active')){
            this.setState("remove");
        }else{
            this.setState("add");
        }
    }

    setState(action){
        if(action === "add"){
            this.mainNav.classList.remove('is-active');
            setTimeout(() => {
                this.searchField.classList.add('is-active');
                this.searchButton.classList.add('is-active');
            }, 200);
        }else{
            this.searchField.classList.remove('is-active');
            this.searchButton.classList.remove('is-active');
            setTimeout(() => {
                this.mainNav.classList.add('is-active');
            }, 500);
        }      
    }
    
    bindElements(){
        this.searchButton.addEventListener('click', () => {
            this.checkState(this.searchButton);
        });
        this.searchClose.addEventListener('click', () => {
            this.setState("remove");
        });
    }

    init(){
        this.getElements();
        if(this.searchButton != null && this.searchField != null){
            this.bindElements();
        }
    }
}