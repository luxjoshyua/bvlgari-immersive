import "core-js/stable";
import "regenerator-runtime/runtime";
import "./sass/index.scss";
import "./modal";
import masthead from "nine-immersive-header";

//header
masthead({
  headerConfig: {
    logoColor: "white",
    bgColor: "#0A1633",
    textColor: "white",
  },
  footerConfig: {
    bgColor: "#0A1633",
    logoColor: "white"
  }
});