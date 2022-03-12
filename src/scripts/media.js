import footerBg from "../images/bg-footer.png";
import featureBg from "../images/bg-feature.png";
// handel the backgrounds
giveImageInElement("main-footer", footerBg);
giveImageInElement("feature-section", featureBg);

// function for give image to element
function giveImageInElement(className, img) {
  document.querySelector(`.${className}`).style.backgroundImage = `url(${img})`;
}
