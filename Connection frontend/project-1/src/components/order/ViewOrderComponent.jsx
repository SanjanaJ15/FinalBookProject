import React, { Component } from 'react'
import OrderService from './OrderService'

class ViewOrderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            orderid: this.props.match.params.orderid,
            order: {}
        }
    }

    componentDidMount(){
        OrderService.getOrderById(this.state.orderid).then( res => {
            this.setState({order: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View order Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Customer Id : </label>
                            <div> { this.state.order.custid }</div>
                        </div>
                        <div className = "row">
                            <label> Book id: </label>
                            <div> { this.state.order.bookid }</div>
                        </div>
                        <div className = "row">
                            <label> Quantity: </label>
                            <div> { this.state.order.quantity }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewOrderComponent
