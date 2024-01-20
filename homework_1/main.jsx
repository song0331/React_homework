import "./style.css"
import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById('root');
const reactDomRoot = ReactDOM.createRoot(root);

const createApp = (
  <div>
    <h1>hello, world!</h1>
  </div>
)


reactDomRoot.render(createApp);