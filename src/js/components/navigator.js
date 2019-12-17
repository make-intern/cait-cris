export class navigator{
    constructor(){
        this.map = null;
    }

    getElements(){
        this.map = document.getElementById('map');
    }
    
    initializeGoogleMap(){
        // The location of Uluru
        var uluru = {lat: -25.344, lng: 131.036};
        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 4, center: uluru});
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({position: uluru, map: map});
    }

    // getChildElements(element){
    //     let _self = this;
    //     element.forEach((item)=>{
    //         _self.paginations = Array.from(item.querySelectorAll('.js-gallery__pagination'));
    //         _self.slides = Array.from(item.querySelectorAll('.c-gallery__slide'));
    //     });
    // }

    // setActive(element, index){
    //     element.classList.add('is-active');
    //     this.slides[index].classList.add('is-active');
    // }

    // clearActive(elements){
    //     elements.forEach((item) => {
    //         item.classList.remove('is-active');
    //     });
    // }
    
    // bindElements(){
    //     let _self = this;
    //     this.paginations.forEach((item, key)=> {
    //         item.addEventListener('click', () =>{
    //             _self.clearActive(_self.paginations);
    //             _self.clearActive(_self.slides);
    //             _self.setActive(item, key);
    //         });
    //     });
    // }

    init(){
        this.getElements();
        if(this.gallery != null){
            // this.bindElements();
            this.initializeGoogleMap();
        }
        // google.maps.event.addDomListener(window, 'load', this.initializeGoogleMap());
    }
}