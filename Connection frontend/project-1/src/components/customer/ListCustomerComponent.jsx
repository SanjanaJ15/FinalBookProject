import React, { Component } from 'react'
import CustomerService from './CustomerService'

class ListCustomerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
                customers: []
        }
        this.addCustomer = this.addCustomer.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
    }

    deleteCustomer(custid){
        CustomerService.deleteCustomer(custid).then( res => {
            this.setState({customers: this.state.customers.filter(customer => customer.custid !== custid)});
        });
    }
    viewCustomer(custid){
        this.props.history.push(`/view-customer/${custid}`);
    }
    editCustomer(custid){
        this.props.history.push(`/add-customer/${custid}`);
    }

    componentDidMount(){
        CustomerService.getCustomers().then((res) => {
            this.setState({ customers: res.data});
        });
    }

    addCustomer(){
        this.props.history.push('/add-customer/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Customer List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addCustomer}> Add Customer</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> First Name</th>
                                    <th> Last Name</th>
                                    <th> Email Id</th>
                                    <th> Password</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.customers.map(
                                        customer => 
                                        <tr key = {customer.custid}>
                                             <td> { customer.firstName} </td>   
                                             <td> {customer.lastName}</td>
                                             <td> {customer.emailId}</td>
                                             <td> {customer.password}</td>
                                             <td>
                                                 <button onClick={ () => this.editCustomer(customer.custid)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCustomer(customer.custid)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewCustomer(customer.custid)} className="btn btn-info">View </button>
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

export default ListCustomerComponent
