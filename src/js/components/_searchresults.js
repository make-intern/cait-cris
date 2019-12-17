document.addEventListener("DOMContentLoaded", function(){
    var propertyResults = document.getElementById("p-results");
    var articleResults = document.getElementById("a-results");
    var propertyLink = document.getElementById('p-link');
    var articleLink = document.getElementById('a-link');

        function setArticleActive(){
            if(propertyResults.classList.contains("is-active")) {
                propertyResults.classList.add("is-active");
            } else {
                propertyResults.classList.remove("is-active");
            }
    
        }


      /*  function setArticleActive(){
            propertyResults.classList.remove("is-active");
            articleResults.classList.add("is-active");
            propertyLink.classList.remove("is-active-tab");
            articleLink.classList.add("is-active-tab");
        }*/

    
        propertyLink.addEventListener('click', function() {
            setPropertyActive();
        });

        articleLink.addEventListener('click', function() {
            setArticleActive();
        });

       // console.log('loaded');
       // setArticleActive();
    });