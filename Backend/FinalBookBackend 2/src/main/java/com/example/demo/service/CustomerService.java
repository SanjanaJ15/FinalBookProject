package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.CustomerDao;
import com.example.demo.model.Customer;


@Service
public class CustomerService {

	
	@Autowired
	CustomerDao customerdao;
	
	public List<Customer> getCustomer() {
		// TODO Auto-generated method stub
		return customerdao.findAll();
	}

	public Customer getCustomer(String cusId) {
		// TODO Auto-generated method stub
		return customerdao.findById(cusId).get();
	}

	public Customer add(Customer customer) {
		// TODO Auto-generated method stub
		return customerdao.save(customer);
		
	}

	public Customer update(Customer customer) {
		// TODO Auto-generated method stub
		return customerdao.save(customer);
	}

	public void delete(String cusId) {
		// TODO Auto-generated method stub
		customerdao.deleteById(cusId);
		
	}

	
	

}
