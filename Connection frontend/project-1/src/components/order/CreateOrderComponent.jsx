import React, { Component } from 'react'
import OrderService from './OrderService';

export default class CreateOrderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
        
            orderid: this.props.match.params.orderid,
            custid: '',
            bookid: '',
            quantity: ''
            
        }
        this.changecustidHandler = this.changecustidHandler .bind(this);
        this.changebookidHandler = this.changebookidHandler.bind(this);
        this.changequantityHandler = this.changequantityHandler.bind(this);
        this.saveOrUpdateOrder = this.saveOrUpdateOrder.bind(this);
    }

    componentDidMount(){

        if(this.state.orderid === '_add'){
            return
        }else{
            OrderService.getOrderById(this.state.orderid).then( (res) =>{
                let order = res.data;
                this.setState({custid: order.custid,
                    bookid: order.bookid,
                    quantity: order.quantity
                });
            });
        }        
    }
    saveOrUpdateOrder = (e) => {
        e.preventDefault();
        let order = {custid: this.state.custid,  bookid: this.state.bookid, quantity: this.state.quantity};
        console.log('order => ' + JSON.stringify(order));

        if(this.state.orderid === '_add'){
            OrderService.createOrder(order).then(res =>{
                this.props.history.push('/orders');
            });
        }else{
            OrderService.updateOrder(order, this.state.orderid).then( res => {
                this.props.history.push('/orders');
            });
        }
    }
    
    changecustidHandler= (event) => {
        this.setState({custid: event.target.value});
    }

    changebookidHandler= (event) => {
        this.setState({bookid: event.target.value});
    }

    changequantityHandler= (event) => {
        this.setState({quantity: event.target.value});
    }

    cancel(){
        this.props.history.push('/orders');
    }

    getTitle(){
        if(this.state.orderid === '_add'){
            return <h3 className="text-center">Add order</h3>
        }else{
            return <h3 className="text-center">Update order</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Customer Id : </label>
                                            <input placeholder="Customer Id " name="custid" className="form-control" 
                                                value={this.state.custid} onChange={this.changecustidHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> book Id : </label>
                                            <input placeholder="book Id" name="bookid" className="form-control" 
                                                value={this.state.bookid} onChange={this.changebookidHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Quantity: </label>
                                            <input placeholder="Quantity" name="quantity" className="form-control" 
                                                value={this.state.quantity} onChange={this.changequantityHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateOrder}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

