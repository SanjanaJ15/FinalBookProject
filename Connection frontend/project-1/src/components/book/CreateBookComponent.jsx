import React, { Component } from 'react'
import BookService from './BookService';

class CreateBookComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bookid: this.props.match.params.id,
            title: '',
            author: '',
            category: '',
            instock:'',
            price:'',
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeAuthorHandler = this.changeAuthorHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.changeInstockHandler = this.changeInstockHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.saveOrUpdateBook = this.saveOrUpdateBook.bind(this);
    }

    componentDidMount(){

        if(this.state.bookid === '_add'){
            return
        }else{
            BookService.getBookById(this.state.bookid).then( (res) =>{
                let Book = res.data;
                this.setState({
                    bookid:Book.bookid,
                    title:Book.title,
                    author:Book.author,
                    category:Book.category,
                    instock:Book.instock,
                    price:Book.price
                });
            });
        }        
    }
    saveOrUpdateBook = (e) => {
        e.preventDefault();
        let Book = {bookid: this.state.bookid, title: this.state.title, author: this.state.author,category:this.state.category,instock:this.state.instock,price:this.state.price};
        console.log('Book => ' + JSON.stringify(Book));

        if(this.state.bookid === '_add'){
            BookService.createBook(Book).then(res =>{
                this.props.history.push('/Books');
            });
        }else{
            BookService.updateBook(Book, this.state.id).then( res => {
                this.props.history.push('/Books');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Book</h3>
        }else{
            return <h3 className="text-center">Update Book</h3>
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
                                        
                                        <button className="btn btn-success" onClick={this.saveOrUpdateBook}>Save</button>
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

export default CreateBookComponent
