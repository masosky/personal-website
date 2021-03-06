import React from "react";
//import ReactDOM from 'react-dom';
import "./index.css";
import App from "../components/App";
import ReactGA from "react-ga";
//import * as serviceWorker from '../serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
export default () => {
  ReactGA.initialize("UA-110555374-1");
  return <App />;
};
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
