import { tns } from "tiny-slider/src/tiny-slider"

export class gallerySlider{
    constructor(){
        this.slidersArray = null;
        // this.paginations = null;
        // this.slides = null;
    }

    init(){
        if(Array.from(document.querySelectorAll('.js-slider')) != null) {
            this.getElements();
        }else{
            return false;
        };
    }

    getElements(){
        // this.slidersArray =  Array.from(document.querySelectorAll('.js-slider'));
        // this.slidersArray =  [].slice.call(document.querySelectorAll('.js-slider'));

        this.slidersArray =  document.querySelectorAll('.js-slider');
        

        console.log(this.slidersArray);
        this.directType(this.slidersArray);
    }

    directType(elements){
        elements.forEach(element =>  {
            if(element.classList.contains('c-slidersgallery--hero-slides')){
                this.bannerGallery(element);
            }

            if(element.classList.contains('c-slidersgallery--vertical-slides')){
                this.verticalGallery(element);
            }

            if(element.classList.contains('c-slidersgallery--socmed-slides')){
                this.socmedSlider(element);
            }
            
            // else{
            //     return 1;
            // }
        });
    }

    bannerGallery(element){
        tns({
            container: element,
            "items": 1,
            "mode": "gallery",
            "slideBy": "page",
            "mouseDrag": true,
            "swipeAngle": false,
            "speed": 500,
            "controls": false,
            "navContainer": '.js-slider_nav'
        });
        return 1;
    }

    verticalGallery(element){
        tns({
            container: element,
            "items": 1,
            "mode": "gallery",
            "slideBy": "page",
            "mouseDrag": true,
            "swipeAngle": false,
            "speed": 500,
            "controls": false,
            "navContainer": '.js-slider_nav--vertical',
            "navPosition" : "right",
            "axis": "vertical"
        });
        return 1;
    }

    socmedSlider(element){
        tns({
            container: element,
            "autoWidth": true,
            "items": 3.5,
            "gutter": 40,
            "mouseDrag": true,
            "swipeAngle": false,
            "speed": 500,
            "slideBy": 1,
            "autoplay": true,
            "autoplayButtonOutput": false,
            "loop": true,
            "controls": false,
            "nav": false,
            "autoplayButton" : false,
            "responsive": {
                "350" : {
                    "items": 1,
                    "gutter": 0,
                    "autoWidth": false,
                },
                "768" : {
                    "items": 3.5,
                    "gutter": 40,
                }
            }
        });
        return 1;
    }
}