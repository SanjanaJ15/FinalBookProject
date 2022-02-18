package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;



import com.example.demo.dao.BookDao;
import com.example.demo.model.Book;


@Service
public class BookService {
	@Autowired
	BookDao userDao;
	
	
    public Optional<Book> findById(String id)
    {
		return userDao.findById(id);
    	
    }
	
	/*
    
    public Optional<Book> findByBrand(String brand)
    {
		return userDao.findByAuthor(brand);
    	
    }
    */
	/*
   public  List<Book> findByPriceLessThan(double price)
   {
	return userDao.findByPriceLessThan(price);
	   
   }
    */
	
  
   
}

