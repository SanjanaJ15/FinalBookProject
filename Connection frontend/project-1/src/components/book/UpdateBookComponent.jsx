import React, { Component } from 'react'
import BookService from './BookService';

class UpdateBookComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bookid: this.props.match.params.id,
            title:'',author:'',categor:'',
            instock:'',price:'',
            }
            this.changeTitleHandler = this.changeTitleHandler.bind(this);
            this.changeAuthorHandler = this.changeAuthorHandler.bind(this);
            this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
            this.changeInstockHandler = this.changeInstockHandler.bind(this);
            this.changePriceHandler = this.changePriceHandler.bind(this);
        this.updateBook = this.updateBook.bind(this);
    }

    componentDidMount(){
        BookService.getBookById(this.state.bookid).then( (res) =>{
            let book = res.data;
            this.setState({title:book.title,
                author:book.author,
                category:book.category,
                instock:book.instock,
                price:book.price
            });
        });
    }

    updateBook = (e) => {
        e.preventDefault();
        let book = {ftitle: this.state.title, author: this.state.author, category: this.state.category,instock:this.state.instock,price:this.state.price};
        console.log('book => ' + JSON.stringify(book));
        console.log('id => ' + JSON.stringify(this.state.bookid));
        BookService.updateBook(book, this.state.bookid).then( res => {
            this.props.history.push('/Books');
        });
    }
    
    changeBookidHandler= (event) => {
        this.setState({bookid: event.target.value});
    }

    changeTitleHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changeAuthorHandler= (event) => {
        this.setState({author: event.target.value});
    }
    changeCategoryHandler= (event) => {
        this.setState({category: event.target.value});
    }
    changeInstockHandler= (event) => {
        this.setState({instock: event.target.value});
    }

    changePriceHandler= (event) => {
        this.setState({price: event.target.value});
    }

    cancel(){
        this.props.history.push('/Books');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Book</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Title: </label>
                                            <input placeholder="Title" name="title" className="form-control" 
                                                value={this.state.title} onChange={this.changeTitleHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Author: </label>
                                            <input placeholder="Author" name="author" className="form-control" 
                                                value={this.state.author} onChange={this.changeAuthorHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Category </label>
                                            <input placeholder="Category" name="category" className="form-control" 
                                                value={this.state.category} onChange={this.changeCategoryHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Instock: </label>
                                            <input placeholder="Instock" name="instock" className="form-control" 
                                                value={this.state.instock} onChange={this.changeInstockHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Price: </label>
                                            <input placeholder="price" name="price" className="form-control" 
                                                value={this.state.price} onChange={this.changePriceHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateBook}>Save</button>
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

export default UpdateBookComponent
