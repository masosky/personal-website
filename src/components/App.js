import React, {Component} from "react";
import Header from "./Header";
import About from "./About";
import Resume from "./Resume";
import Music from "./Music";
//import Portfolio from "./Portfolio"
//import Testimonials from  './components/Testimonials';
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import resumeData from "../resumeData";
import ReactGA from "react-ga";
import {Helmet} from "react-helmet";
import {withPrefix} from "gatsby";
import MetaTags from 'react-meta-tags';

class App extends Component {
    componentDidMount() {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    render() {
        return (
            <div className="App">
                <Helmet>
                    <meta charset="utf-8"/>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    <link rel="shortcut icon" href="favicon.ico"/>
                    <meta name="note" content="environment=development"/>
                    <meta name="theme-color" content="#000000"/>

                    <link rel="manifest" href="manifest.json"/>

                    <title>Xavier Mas Leszkiewicz</title>
                    <MetaTags>
                        <title>Page 1</title>
                        <meta name="description" content="Xavier's Personal Website."/>
                        <meta property="og:title" content="Xavier's Personal Website."/>
                        <meta property="og:image" content="images/profilepic3.jpg"/>
                    </MetaTags>
                    <meta name="description" content="Xavier's Personal Website"/>
                    <link rel="stylesheet" href="css/default.css"/>
                    <link rel="stylesheet" href="css/layout.css"/>
                    <link rel="stylesheet" href="css/media-queries.css"/>
                    <link rel="stylesheet" href="css/magnific-popup.css"/>

                    <script src={withPrefix("script.js")} type="text/javascript"/>
                </Helmet>
                <Header resumeData={resumeData}/>
                <About resumeData={resumeData}/>
                <Resume resumeData={resumeData}/>
                <Music resumeData={resumeData}/>
                {/*<Portfolio resumeData={resumeData}/>*/}
                {/*<Testimonials resumeData={resumeData}/>*/}
                <ContactUs resumeData={resumeData}/>
                <Footer resumeData={resumeData}/>
            </div>
        );
    }
}

export default App;
