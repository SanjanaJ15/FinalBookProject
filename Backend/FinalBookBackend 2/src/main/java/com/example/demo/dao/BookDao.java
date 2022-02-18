package com.example.demo.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Book;







@Repository
public interface BookDao extends JpaRepository<Book,String> {

	//Optional<Book> findByAuthor(String id);
	 Optional<Book> findById(String id);
	//List<Book> findByPriceLessThan(double price);
	

	
	

	
	
}

