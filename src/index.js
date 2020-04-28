import "core-js/stable";
import "regenerator-runtime/runtime";
import "./sass/index.scss";

// remember to install first! $ npm i fairfax-header
import fairfax from "fairfax-header";

//header
fairfax({
  headerConfig: {
    logoColor: "white",
    bgColor: "transparent",
    // textColor: "white",
    css: {
      borderBottom: "solid 1px white"
    }
  },
  footerConfig: {
    bgColor: "transparent",
    logoColor: "white"
  }
});

document.querySelector(".hero .next").addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: window.innerHeight,
    behavior: "smooth"
  });
});
