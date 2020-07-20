import React, { Component } from "react";

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="music">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/xavyx.jpg" alt="" />
          </div>

          <div className="nine columns main-col">
            <h2>Music Producer</h2>
            <p>{resumeData.aboutXavyx}</p>
            <h5 className="mt-10">YouTube Channel</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={resumeData.youTubeChannel}
            >
              {resumeData.youTubeChannel}
            </a>
            <h5>SoundCloud</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={resumeData.soundCloud}
            >
              {resumeData.soundCloud}
            </a>
            <h5>Instagram</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={resumeData.xavyxInstagram}
            >
              {resumeData.xavyxInstagram}
            </a>
          </div>
        </div>
      </section>
    );
  }
}
