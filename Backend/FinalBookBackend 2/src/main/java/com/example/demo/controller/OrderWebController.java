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

import com.example.demo.model.Customer;
import com.example.demo.model.Order;
import com.example.demo.service.OrderService;
 @CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class OrderWebController {

@Autowired
OrderService orserv;

@GetMapping("/orders")
public List<Order> getOrder() {
	return orserv.getOrder();
}


@GetMapping("/orders/{custid}")
public List<Order> getOrder(@PathVariable String custid){
	return orserv.getOrderBycustid(custid);
	
}

@PostMapping("/orders")
public String addOrder(@RequestBody Order order) {
	 orserv.add(order);
	 return "succesfully added";
}//Create and Update

@DeleteMapping("/orders/{orderid}")
public String  deletebyid(@PathVariable String orderid) {
	orserv.delete(orderid);
	return "deleted";
}

@PutMapping("/orders/{id}")
public Order updateCustomer(@RequestBody Order order,@PathVariable String id)
{
	return orserv.update(order);
	
}


}
