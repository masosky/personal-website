import React, { useEffect } from "react";
import "./404.css";

export default () => {
    
  useEffect(() => {
    document.body.classList.add("body-404");
    return () => {
      document.body.classList.remove("body-404");
    };
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <div className="error">
          <p className="p">4</p>
          <span className="dracula">
            <div className="con">
              <div className="hair"></div>
              <div className="hair-r"></div>
              <div className="head"></div>
              <div className="eye"></div>
              <div className="eye eye-r"></div>
              <div className="mouth"></div>
              <div className="blod"></div>
              <div className="blod blod2"></div>
            </div>
          </span>
          <p className="p">4</p>

          <div className="page-ms">
            <p className="page-msg">
              {" "}
              Oops, the page you're looking for Disappeared{" "}
            </p>
            <button
              className="go-back"
              onClick={() => (window.location.href = "/")}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>

      <iframe
        style={{ width: 0, height: 0, border: 0, border: "none" }}
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://instaud.io/_/2Vvu.mp3"
      ></iframe>
    </React.Fragment>
  );
};
