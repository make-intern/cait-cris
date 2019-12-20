export class alertdata {
    constructor() {
        this.aLink = null;
    }

    getElements() {
        this.aLink = Array.from(document.querySelectorAll('.js-link'))
    }

    getTarget(element) {
        let target = element.dataset.attribute;
        this.alertTarget(target);
    }

    alertTarget(type) {
        alert('This is the ' + type + ' attribute');
    }

    bindElements() {
        this.aLink.forEach((element) => {
            element.addEventListener('click', () =>{
                this.getTarget(element);
            });

        });
    }

    init() {
        this.getElements();
        this.bindElements();
    }

}