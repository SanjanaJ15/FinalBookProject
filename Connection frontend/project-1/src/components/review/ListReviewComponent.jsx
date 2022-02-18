import React, { Component } from 'react'
import ReviewService from './ReviewService'

class ListReviewComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                reviews: []
        }
        this.addReview = this.addReview.bind(this);
        this.editReview = this.editReview.bind(this);
        this.deleteReview = this.deleteReview.bind(this);
    }

    deleteReview(reviewid){
        ReviewService.deleteReview(reviewid).then( res => {
            this.setState({reviews: this.state.reviews.filter(review => review.reviewid !== reviewid)});
        });
    }
   viewReview(reviewid){
        this.props.history.push(`/view-review/${reviewid}`);
    }
    editReview(reviewid){
        this.props.history.push(`/add-review/${reviewid}`);
    }

    componentDidMount(){
        ReviewService.getreviews().then((res) => {
            this.setState({ reviews: res.data});
        });
    }

    addReview(){
        this.props.history.push('/add-review/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Review List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addReview}> Add Review</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Customer Id </th>
                                    <th> Book Id</th>
                                    <th> Comments </th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.reviews.map(
                                        review => 
                                        <tr key = {review.reviewid}>
                                             <td> { review.custid} </td>   
                                             <td> {review.bookid}</td>
                                             <td> {review.comment}</td>
                                             <td>
                                                 <button onClick={ () => this.editReview(review.reviewid)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteReview(review.reviewid)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewReview(review.reviewid)} className="btn btn-info">View </button>
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

export default ListReviewComponent 
