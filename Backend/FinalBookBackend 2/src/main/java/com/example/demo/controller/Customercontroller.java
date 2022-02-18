
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

import com.example.demo.model.Book;
import com.example.demo.model.Customer;
import com.example.demo.service.CustomerService;


@CrossOrigin(origins="http://localhost:3000")
@RestController

@RequestMapping("/api/v1")
public class Customercontroller {

	@Autowired
	CustomerService custser;
	
	
	@GetMapping("/customers")
	public List<Customer> getCustomer()
	{
		return custser.getCustomer();
		
	}
	@GetMapping("/customers/{CusId}")
	public Customer getCustomer(@PathVariable String CusId)
	{
		return custser.getCustomer(CusId);
	}
	@PostMapping("/customers")
	public Customer addCustomer(@RequestBody Customer customer)
	{
		 return custser.add(customer);
	}
	@PutMapping("/customers/{custid}")
    public Customer updateCustomer(
        @RequestBody Customer cust,
        @PathVariable String custid)
    
    {
	      return custser.add(cust);
    }
	
	@DeleteMapping("/customers/{CusId}")
	public String deleteCustomer(@PathVariable String CusId)
	{
		custser.delete(CusId);
		return "deleted sucessfully!!!";
		
	}
}

