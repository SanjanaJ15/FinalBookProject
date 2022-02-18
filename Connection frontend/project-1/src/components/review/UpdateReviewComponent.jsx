import React, { Component } from 'react'
import ReviewService from './ReviewService';

class UpdateReviewComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            reviewid: this.props.match.params.reviewid,
            custid: '',
            bookid: '',
            comment: ''
        }
        this.changeCustIdHandler = this.changeCustIdHandler.bind(this);
        this.changeBookIdHandler = this.changeBookIdHandler.bind(this);
        this.changecommentHandler = this.changecommentHandler.bind(this);
        this.saveOrUpdateReview = this.saveOrUpdateReview.bind(this);
    }

    componentDidMount(){
        ReviewService.getReviewById(this.state.reviewid).then( (res) =>{
            let review = res.data;
            this.setState({custid: review.custid,
               bookid: review.bookid,
                comment : review.comment
            });
        });
    }

    saveOrUpdateReview = (e) => {
        e.preventDefault();
        let review = { custid: this.state.custid, bookid: this.state. bookid, comment: this.state.comment};
        console.log('review => ' + JSON.stringify(review));
        console.log('reviewid => ' + JSON.stringify(this.state.reviewid));
        ReviewService.saveOrUpdateReview(review, this.state.reviewid).then( res => {
            this.props.history.push('/reviews');
        });
    }
    
    changeCustIdHandler= (event) => {
        this.setState({ custid: event.target.value});
    }

    changeBookIdHandler= (event) => {
        this.setState({ bookid: event.target.value});
    }

    changecommentHandler= (event) => {
        this.setState({comment: event.target.value});
    }

    cancel(){
        this.props.history.push('/reviews');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Review</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Customer Id: </label>
                                            <input placeholder="Customer id" name=" custid" className="form-control" 
                                                value={this.state. custid} onChange={this.changeCustIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Book Id: </label>
                                            <input placeholder="Book Id" name=" bookid" className="form-control" 
                                                value={this.state. bookid} onChange={this.changeBookIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Comment: </label>
                                            <input placeholder="Comment" name="comment" className="form-control" 
                                                value={this.state.comment} onChange={this.changecommentHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateReview}>Save</button>
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

export default UpdateReviewComponent
