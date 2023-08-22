import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {HashRouter } from "react-router-dom";
import validator from "validator/es";

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>,
)
