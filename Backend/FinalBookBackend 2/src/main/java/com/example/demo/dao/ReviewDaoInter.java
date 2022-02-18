package com.example.demo.dao;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Review;



@Repository
public interface ReviewDaoInter extends JpaRepository<Review,String> 
{
	public List<Review> findByBookid(String name);
}