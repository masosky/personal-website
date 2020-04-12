import React, { Component } from "react";
import ReactGA from 'react-ga';
export default class About extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>
            <h3>Job description</h3>
            <p>{resumeData.currentJob}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br></br>
                  <span>{resumeData.address}</span>
                  <br></br>
                  <a href={resumeData.website}>{resumeData.website}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
