package com.example.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Review;
import com.example.demo.service.ReviewService;


@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/api/v1")
@RestController

public class ReviewController 
{
	@Autowired
	ReviewService s;
	
	//ADD A REVIEW
	@PostMapping("/review")
	public Review addReview(@RequestBody Review rev)
	{
		return s.addReview(rev);
	}
	
	//UPDATE A REVIEW
	@PutMapping("/review/{id}")
	public Review updateReview(@RequestBody Review rev,@PathVariable String id)
	{		
		return s.updateReview(rev);
	}

	//DELETE A REVIEW
	@DeleteMapping("/review/{id}")
	public String deleteReview(@PathVariable String id)
	{
		if(s.deleteReview(id)==1)
			return "Delete Succesful";
		else 
			return "Review Not Found";
	}		
	
	//GET REVIEW BY BOOK ID
	@GetMapping("/review/{id}")
	public List<Review> findbyBookid(@PathVariable String bookid)
	{
		return s.getbyBookid(bookid);
	}
		
	//GET ALL REVIEWS
	@GetMapping("/review")
	public List<Review> findAll()
	{
		return s.getAll();
	}
}
