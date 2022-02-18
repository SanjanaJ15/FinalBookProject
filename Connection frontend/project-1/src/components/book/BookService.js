import axios from 'axios';

const baseURL = "http://localhost:8080/api/v1/Books";

class BookService {

    getEmployees(){
        return axios.get(baseURL);
        
    }

    createEmployee(book){
        return axios.post(baseURL, book);
    }

    getEmployeeById(bookId){
        return axios.get(baseURL + '/' + bookId);
    }

    updateEmployee(book, bookId){
        return axios.put(baseURL + '/' + bookId, book);
    }

    deleteEmployee(bookId){
        return axios.delete(baseURL + '/' + bookId);
    }
}

export default new BookService()