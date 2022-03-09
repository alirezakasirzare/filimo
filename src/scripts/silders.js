// import tiny silder module
import { tns } from "tiny-slider";
import "tiny-slider/dist/tiny-slider.css";

// create free secrion silder
tns({
  container: "#free-section-slider",
  controlsContainer: "#free-controls",
  items: 2,
  slideBy: "1",
  mouseDrag: true,
  nav: false,
  loop: false,
  gutter: 10,
  responsive: {
    572: {
      items: 3,
    },
    768: {
      items: 4,
    },
    992: {
      items: 5,
    },
    1200: {
      items: 6,
    },
  },
});

// create children secrion silder
tns({
  container: "#children-section-slider",
  controlsContainer: "#children-controls",
  items: 2,
  slideBy: "1",
  mouseDrag: true,
  nav: false,
  loop: false,
  gutter: 10,
  responsive: {
    572: {
      items: 3,
    },
    768: {
      items: 4,
    },
    992: {
      items: 5,
    },
    1200: {
      items: 6,
    },
  },
});
