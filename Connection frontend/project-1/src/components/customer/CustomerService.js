import axios from 'axios';
const baseURL = "http://localhost:8080/api/v1/Customer";

class CustomerService {

    getCustomers(){
        return axios.get(baseURL);
        
    }
    createCustomer(customer){
        return axios.post(baseURL, customer);
    }
    getCustomerById(custid){
        return axios.get(baseURL + '/' + custid);
    }
    updateCustomer(customer, custid){
        return axios.put(baseURL + '/' + custid, customer);
    }
    deleteCustomer(custid){
        return axios.delete(baseURL + '/' + custid);
    }
}

export default new CustomerService()