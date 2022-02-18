package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Order;



@Repository
public interface OrderDao extends JpaRepository<Order,String>
{
	public List<Order> findBycustid(String custid);
	
	//@Query("select c.FirstName from Customer c inner join u.a ar where ar.idArea = :idArea");
	
	//SELECT Customer.first_name, Customer.last_name,orders.orderid,orders.price,orders.quantity
	//FROM Customer
	//INNER JOIN orders ON orders.custid = customer.custid;
	 
}
