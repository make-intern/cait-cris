export class megamenu{
    constructor(){
        this.header = null;
    }

    getElements(){
        this.header = document.getElementById('js-header');
    }
    
    checkOffsetTop(element){
        let _windowOffsetTop = window.scrollY;
        if(_windowOffsetTop > 0 ){
            this.setFixed("add", this.header);
        }else{
            this.setFixed("remove", this.header);
        }
    }

    setFixed(action, element){
        if(action === "add"){
            element.classList.add('is-fixed');
        }else{
            element.classList.remove('is-fixed');
        }
    }
    
    bindElements(){
        let _self = this;
        window.addEventListener('scroll', () => {
            this.checkOffsetTop(this.header);
        });
    }

    init(){
        this.getElements();
        if(this.header != null){
            this.bindElements();
        }
    }
}