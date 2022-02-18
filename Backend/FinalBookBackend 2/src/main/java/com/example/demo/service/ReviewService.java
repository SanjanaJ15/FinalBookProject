package com.example.demo.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.ReviewDaoInter;
import com.example.demo.model.Review;


@Service
public class ReviewService
{
	@Autowired
	ReviewDaoInter d;
	
	    //ADD A REVIEW
		public Review addReview(Review rev)
		{
			d.save(rev);
			return rev;
		}
		
		//UPDATE A REVIEW
		public Review updateReview(Review rev)
		{
			d.save(rev);
			return rev;
		}

		//DELETE A REVIEW
		public int deleteReview(String id)
		{
			
			if(d.existsById(id))
		    {
		    	d.deleteById(id);
		    	return 1;
		    }
		    else return 0;
		}
		//GET REVIEW BY BOOK ID
		public List<Review> getbyBookid(String bookid)
		{
			return d.findByBookid(bookid);
		}
		//GET ALL REVIEWS FROM DB
		public List<Review> getAll()
		{
			return d.findAll();
		}
}