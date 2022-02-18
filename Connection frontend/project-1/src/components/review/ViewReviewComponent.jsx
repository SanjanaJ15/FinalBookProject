import React, { Component } from 'react'
import ReviewService from './ReviewService'

class ViewReviewComponent  extends Component {
    constructor(props) {
        super(props)

        this.state = {
            reviewid: this.props.match.params.reviewid,
            review : {}
        }
    }

    componentDidMount(){
        ReviewService.getReviewById(this.state.reviewid).then( res => {
            this.setState({review : res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Review  Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Customer Id: </label>
                            <div> { this.state.review .custid }</div>
                        </div>
                        <div className = "row">
                            <label> Book id: </label>
                            <div> { this.state.review .bookid}</div>
                        </div>
                        <div className = "row">
                            <label> Comment: </label>
                            <div> { this.state.review .comment }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewReviewComponent 
