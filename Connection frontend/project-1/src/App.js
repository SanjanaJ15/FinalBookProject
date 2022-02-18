import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes,Route, Switch} from 'react-router-dom'
import ListCustomerComponent from './components/customer/ListCustomerComponent';
import Main from  './Main';
import Home from "./Home";
import CreateCustomerComponent from './components/customer/CreateCustomerComponent';
import UpdateCustomerComponent from './components/customer/UpdateCustomerComponent';
import ViewCustomerComponent from './components/customer/ViewCustomerComponent';
import { render } from 'react-dom';
import {createBrowserHistory} from 'history';

import CreateBookComponent from './components/book/CreateBookComponent';
import ListBookComponent from './components/book/ListBookComponent';
import UpdateBookComponent from './components/book/UpdateBookComponent';
import ViewBookComponent from './components/book/ViewBookComponent';

import CreateOrderComponent from './components/order/CreateOrderComponent';
import ListOrderComponent from './components/order/ListOrderComponent';
import UpdateOrderComponent from './components/order/UpdateOrderComponent';
import ViewOrderComponent from './components/order/ViewOrderComponent';

import CreateReviewComponent from './components/review/CreateReviewComponent';
import ListReviewComponent from './components/review/ListReviewComponent';
import UpdateReviewComponent from './components/review/UpdateReviewComponent';
import ViewReviewComponent from './components/review/ViewReviewComponent';

function App() {
    render()
    {
        const browserHistory = createBrowserHistory();
   
    
  return (
    <div>
        <Router history = {browserHistory}>
        <Routes>
              <Main/> 
                <div className="container">
                
                          <Route path = "/" element = {<Home/>}></Route>
                          
                          <Route path = "/customer" element = {<ListCustomerComponent/>}></Route>
                          <Route path = "/add-customer/:id" element = {<CreateCustomerComponent/>}></Route>
                          <Route path = "/view-customer/:id" element = {<ViewCustomerComponent/>}></Route>
                          {/* <Route path = "/update-customer/:id" component = {UpdateCustomerComponent}></Route> */}

                          <Route path = "/book" element = {<ListBookComponent/>}></Route>
                          <Route path = "/add-book/:id" element = {<CreateBookComponent/>}></Route>
                          <Route path = "/view-book/:id" element = {<ViewBookComponent/>}></Route>
                          {/* <Route path = "/update-book/:id" component = {UpdateBookComponent}></Route> */}

                          <Route path = "/order" element = {<ListOrderComponent/>}></Route>
                          <Route path = "/add-order/:id" element = {<CreateOrderComponent/>}></Route>
                          <Route path = "/view-order/:id" element = {<ViewOrderComponent/>}></Route>
                          {/* <Route path = "/update-book/:id" component = {UpdateOrderComponent}></Route> */}
                          
                          <Route path = "/review" element = {<ListReviewComponent/>}></Route>
                          <Route path = "/add-review/:id" element = {<CreateReviewComponent/>}></Route>
                          <Route path = "/view-review/:id" element = {<ViewReviewComponent/>}></Route>
                          {/* <Route path = "/update-review/:id" component = {UpdateReviewComponent}></Route> */}

                          </div>
                    </Routes>
                    </Router>
                </div>
  );
    }
            
}
export default App;
