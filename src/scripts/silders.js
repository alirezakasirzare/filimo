import { tns } from "tiny-slider";
import "tiny-slider/dist/tiny-slider.css";

var slider = tns({
  container: ".my-slider",
  items: 5,
  slideBy: "page",
  mouseDrag: true,
  controls: false,
  nav: false,
  loop: false,
  gutter: 10,
});
