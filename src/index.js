import "core-js/stable";
import "regenerator-runtime/runtime";
import "./sass/index.scss";
import "./js/gallery";
import masthead from "nine-immersive-header";

//header
masthead({
  headerConfig: {
    logoColor: "#2D89CE",
    bgColor: "white",
    textColor: "#2D89CE",
  },
  footerConfig: {
    bgColor: "white",
    logoColor: "#2D89CE",
  },
});
