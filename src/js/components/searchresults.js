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
}

/*document.addEventListener("DOMContentLoaded", function(){
    const propertyResults = document.getElementById("p-results");
    const articleResults = document.getElementById("a-results");
    const propertyButton = document.getElementById('p-link');
    const articleButton = document.getElementById('a-link');

        function setActiveState(targetElement) {
            if(targetElement == 'property') {
                propertyResults.classList.add('is-active');
                articleResults.classList.remove("is-active");
                propertyButton.classList.add('is-active-tab');
                articleButton.classList.remove('is-active-tab');
            } else {
                propertyResults.classList.remove('is-active');
                articleResults.classList.add("is-active");
                propertyButton.classList.remove('is-active-tab');
                articleButton.classList.add('is-active-tab');
            }
        }
 
            propertyButton.addEventListener('click', function() { 
                let target = propertyButton.dataset.target;     
                setActiveState(target);
            });

            articleButton.addEventListener('click', function() {
                setActiveState();
            });

});*/