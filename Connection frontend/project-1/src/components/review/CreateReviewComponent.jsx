import React, { Component } from 'react'
import ReviewService from './ReviewService';

class CreateReviewComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            reviewid: this.props.match.params.reviewid,
            custid: '',
            bookid: '',
            comment: ''
            
        }
        this.changeCustIdHandler  = this.changeCustIdHandler .bind(this);
        this.changeBookIdHandler = this.changeBookIdHandler.bind(this);
        this.changecommentHandler = this.changecommentHandler.bind(this);
        this.saveOrUpdateReview = this.saveOrUpdateReview.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.reviewid === '_add'){
            return
        }else{
            ReviewService.getReviewById(this.state.reviewid).then( (res) =>{
                let review = res.data;
                this.setState({custid: review.custid,
                    bookid: review.bookid,
                   comment : review.comment
                });
            });
        }        
    }
    saveOrUpdateReview = (e) => {
        e.preventDefault();
        let review = {custid: this.state.custid, bookid: this.state.bookid,comment: this.state.comment};
        console.log('review => ' + JSON.stringify(review));

        // step 5
        if(this.state.reviewid === '_add'){
            ReviewService.createReview(review).then(res =>{
                this.props.history.push('/reviews');
            });
        }else{
            ReviewService.updateEmployee(review, this.state.reviewid).then( res => {
                this.props.history.push('/reviews');
            });
        }
    }
    
    changeCustIdHandler = (event) => {
        this.setState({custid: event.target.value});
    }

    changeBookIdHandler= (event) => {
        this.setState({bookid: event.target.value});
    }

    changecommentHandler= (event) => {
        this.setState({comment: event.target.value});
    }
    

    cancel(){
        this.props.history.push('/reviews');
    }

    getTitle(){
        if(this.state.reviewid === '_add'){
            return <h3 className="text-center">Add review</h3>
        }else{
            return <h3 className="text-center">Update review</h3>
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
                                            <label> Customer Id: </label>
                                            <input placeholder="Customer Id" name="custid" className="form-control" 
                                                value={this.state.custid} onChange={this.changeCustIdHandler }/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Book Id: </label>
                                            <input placeholder="Book Id" name="bookid" className="form-control" 
                                                value={this.state.bookid} onChange={this.changeBookIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> comment: </label>
                                            <input placeholder="comment" name="comment" className="form-control" 
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

export default CreateReviewComponent
