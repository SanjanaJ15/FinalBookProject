import React, { Component } from 'react'
import OrderService from './OrderService'

class ListOrderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
               orders: []
        }
        this.addOrder = this.addOrder.bind(this);
        this.editOrder = this.editOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
    }

    deleteOrder(orderid){
        OrderService.deleteOrder(orderid).then( res => {
            this.setState({orders: this.state.orders.filter(order => order.orderid !== orderid)});
        });
    }
    viewOrder(orderid){
        this.props.history.push(`/view-order/${orderid}`);
    }
    editOrder(orderid){
        this.props.history.push(`/add-order/${orderid}`);
    }

    componentDidMount(){
        OrderService.getOrders().then((res) => {
            this.setState({orders: res.data});
        });
    }

    addOrder(){
        this.props.history.push('/add-order/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Order List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addOrder}> Add Order</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Customer Id</th>
                                    <th> Book Id </th>
                                    <th> Quantity</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.orders.map(
                                        order => 
                                        <tr key = {order.orderid}>
                                             <td> {order.custid} </td>   
                                             <td> {order.bookid}</td>
                                             <td> {order.quantity}</td>
                                             <td>
                                                 <button onClick={ () => this.editOrder(order.orderid)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteOrder(order.orderid)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewOrder(order.orderid)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListOrderComponent
