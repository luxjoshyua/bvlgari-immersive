import "core-js/stable";
import "regenerator-runtime/runtime";
import "./sass/index.scss";
import "./modal";
// remember to install first! $ npm i fairfax-header
import masthead from "nine-immersive-header";

//header
masthead({
  headerConfig: {
    logoColor: "white",
    bgColor: "transparent",
    // textColor: "white",
    css: {
      borderBottom: "solid 1px white"
    }
  },
  footerConfig: {
    bgColor: "black",
    logoColor: "white"
  }
});