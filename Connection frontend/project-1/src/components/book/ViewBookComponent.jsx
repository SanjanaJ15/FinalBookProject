import React, { Component } from 'react'
import BookService from './BookService'

class ViewBookComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bookid: this.props.match.params.id,
            book: {}
        }
    }

    componentDidMount(){
        BookService.getBookById(this.state.bookid).then( res => {
            this.setState({book: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Book Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Book Title: </label>
                            <div> { this.state.book.title }</div>
                        </div>
                        <div className = "row">
                            <label> Author: </label>
                            <div> { this.state.book.author}</div>
                        </div>
                        <div className = "row">
                            <label> Category: </label>
                            <div> { this.state.book.category }</div>

                        <div className = "row">
                            <label> Instock: </label>
                            <div> { this.state.book.instock }</div>
                        </div>
                        <div className = "row">
                            <label> Price: </label>
                            <div> { this.state.book.price}</div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewBookComponent
