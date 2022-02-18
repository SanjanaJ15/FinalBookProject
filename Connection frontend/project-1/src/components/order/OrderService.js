import axios from 'axios';

const baseURL = "http://localhost:8080/api/v1/orders";


class OrderService {

    getEmployees(){
        return axios.get(baseURL);
        
    }

    createEmployee(order){
        return axios.post(baseURL, order);
    }

    getEmployeeById(orderId){
        return axios.get(baseURL + '/' + orderId);
    }

    updateEmployee(order, orderId){
        return axios.put(baseURL + '/' + orderId, order);
    }

    deleteEmployee(orderId){
        return axios.delete(baseURL + '/' + orderId);
    }
}

export default new OrderService()