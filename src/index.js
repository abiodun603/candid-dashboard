import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import "./styles/index.css"
import "./styles/index.css"
import "boxicons"
import Layout from "./components/c-layout/Layout"
import { AuthContextProvider } from './context/authContext/AuthContext';

document.title = "candidsolutionlimited"
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);