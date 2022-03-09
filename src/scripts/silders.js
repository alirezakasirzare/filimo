import { tns } from "tiny-slider";
import "tiny-slider/dist/tiny-slider.css";

var slider = tns({
  container: ".my-slider",
  items: 3,
  slideBy: "page",
  autoplay: true,
});
