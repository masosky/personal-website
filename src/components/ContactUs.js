import React, { Component } from "react";
import ReactContactForm from "react-mail-form";
import ReactGA from 'react-ga';

export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <h3 className="lead">
              Feel free to contact me for any work or suggestions below
            </h3>
          </div>
        </div>
        {/*<div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>Linked in :{resumeData.linkedinId}</h4>
            </div>
          </aside>
    </div>*/}
        <div className="row">
          <ReactContactForm to="xavier.mas.le@gmail.com" buttonText="Send"/>
        </div>
      </section>
    );
  }
}
