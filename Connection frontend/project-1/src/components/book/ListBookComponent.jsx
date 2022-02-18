import React, { Component } from 'react'
import BookService from './BookService'

class ListBookComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                Books: []
        }
        this.addBook = this.addBook.bind(this);
        this.editBook = this.editBook.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
    }

    deleteBook(bookid){
        BookService.deleteBook(bookid).then( res => {
            this.setState({Books: this.state.Books.filter(Book => Book.bookid !== bookid)});
        });
    }
    viewBook(bookid){
        this.props.history.push(`/view-Book/${bookid}`);
    }
    editBook(bookid){
        this.props.history.push(`/add-Book/${bookid}`);
    }

    componentDidMount(){
        BookService.getBooks().then((res) => {
            this.setState({ Books: res.data});
        });
    }

    addBook(){
        this.props.history.push('/add-Book/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Customer List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addBook}> Add Customer</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Title</th>
                                    <th> Author</th>
                                    <th> Category</th>
                                    <th> InStock</th>
                                    <th> Price </th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Books.map(
                                        Book => 
                                        <tr key = {Book.bookid}>
                                             <td> { Book.title} </td>   
                                             <td> {Book.author}</td>
                                             <td> {Book.category}</td>
                                             <td> {Book.instock}</td>
                                             <td> {Book.price}</td>
                                             <td>
                                                 <button onClick={ () => this.editBook(Book.bookid)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteBook(Book.bookid)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewBook(Book.bookid)} className="btn btn-info">View </button>
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
export default ListBookComponent
