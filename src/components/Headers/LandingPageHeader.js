import React from "react";
import { withRouter } from "react-router-dom";
// core components

function LandingPageHeader(props) {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <div
      style={{
        backgroundImage: "url(" + require("assets/img/heroImage.jpg") + ")",
      }}
      className="page-header page-header-xs"
      data-parallax={true}
      ref={pageHeader}
    ></div>
  );
}

export default withRouter(LandingPageHeader);
