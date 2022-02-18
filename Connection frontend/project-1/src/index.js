import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Router, Routes,Route} from 'react-router-dom'
import ListCustomerComponent from './components/customer/ListCustomerComponent';
import Home from "./Home";
import CreateCustomerComponent from './components/customer/CreateCustomerComponent';
import UpdateCustomerComponent from './components/customer/UpdateCustomerComponent';
import ViewCustomerComponent from './components/customer/ViewCustomerComponent';
import App from './App';
ReactDOM.render(
    <React.StrictMode>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
            <Route path="/customer" element={<ListCustomerComponent/>} ></Route>
            <Route path = "/add-customer/:id" element = {<CreateCustomerComponent />}></Route>
            <Route path = "/view-customer/:id" element = {<ViewCustomerComponent />}></Route>
        </Routes>
      </BrowserRouter> */}
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
