package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.OrderDao;
import com.example.demo.model.Order;



@Service
public class OrderService {

	@Autowired
	OrderDao orderdao;
	
	public List<Order> getOrder() {
		// TODO Auto-generated method stub
		return orderdao.findAll();
	}
	
	public List<Order> getOrderBycustid(String custid){
		return orderdao.findBycustid(custid);
	}

	public Order getorder(String orderid) {
		// TODO Auto-generated method stub
		return orderdao.findById(orderid).get();
	}

	public void  add(Order order) {
		// TODO Auto-generated method stub
		orderdao.save(order);
	}

	public void delete(String orderid) {
		// TODO Auto-generated method stub
	orderdao.deleteById(orderid);
	}

	public Order update(Order order) {
		return orderdao.save(order);
		// TODO Auto-generated method stub
		
	}

}
