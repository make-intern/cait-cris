// Import your JS components here
import { header } from './components/header';
import { megamenu } from './components/megamenu';
import { search } from './components/search';
import { heroGallery } from './components/herogallery';
import { gallerySlider } from './components/gallerySlider';
import { navigator } from './components/navigator';

import { searchresults } from './components/searchresults'; //CAIT
import { navcontent } from './components/navcontent';//CAIT

class App {
  constructor() {
    this.components = [];
  }

  component(component) {
    this.components.push(component);
  }

  boot() {
    this.components.forEach((component) => component.init());
  }
}

const app = new App();
// Push imported JS to component variable using .component method
app.component(new header());
app.component(new megamenu());
app.component(new search());
// app.component(new heroGallery());
app.component(new gallerySlider());
app.component(new navigator());

app.component(new searchresults()); //CAIT
app.component(new navcontent()); //CAIT

document.addEventListener("DOMContentLoaded", () => app.boot());

function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}




