import axios from 'axios';

const baseURL = "http://localhost:8080/api/v1/review";


class ReviewService {

    getReviews(){
        return axios.get(baseURL);
        
    }

    createReview(review){
        return axios.post(baseURL, review);
    }

    getReviewById(reviewId){
        return axios.get(baseURL + '/' + reviewId);
    }

    updateReview(review, reviewId){
        return axios.put(baseURL + '/' + reviewId, review);
    }

    deleteReview(reviewId){
        return axios.delete(baseURL + '/' + reviewId);
    }
}

export default new ReviewService()