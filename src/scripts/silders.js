import { tns } from "tiny-slider";
import "tiny-slider/dist/tiny-slider.css";

var slider = tns({
  container: ".my-slider",
  items: 2,
  slideBy: "page",
  mouseDrag: true,
  controls: false,
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
