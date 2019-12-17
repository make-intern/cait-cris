export class heroGallery{
    constructor(){
        this.gallery = null;
        this.paginations = null;
        this.slides = null;
    }

    getElements(){
        this.gallery = Array.from(document.querySelectorAll('.js-gallery'));
        this.getChildElements(this.gallery);
    }
    
    getChildElements(element){
        let _self = this;
        element.forEach((item)=>{
            _self.paginations = Array.from(item.querySelectorAll('.js-gallery__pagination'));
            _self.slides = Array.from(item.querySelectorAll('.c-gallery__slide'));
        });
    }

    setActive(element, index){
        element.classList.add('is-active');
        this.slides[index].classList.add('is-active');
    }

    clearActive(elements){
        elements.forEach((item) => {
            item.classList.remove('is-active');
        });
    }
    
    bindElements(){
        let _self = this;
        this.paginations.forEach((item, key)=> {
            item.addEventListener('click', () =>{
                _self.clearActive(_self.paginations);
                _self.clearActive(_self.slides);
                _self.setActive(item, key);
            });
        });
    }

    init(){
        this.getElements();
        if(this.gallery != null){
            this.bindElements();
        }
    }
}