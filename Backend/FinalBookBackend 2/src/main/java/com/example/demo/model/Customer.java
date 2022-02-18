package com.example.demo.model;
import com.example.demo.model.*;

import java.util.Objects;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.example.demo.model.Order;


@Entity
public class Customer {
	
	//@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private String custid;
	@Column
	private String firstName;
	@Column
	private String lastName;
	@Column
	private String emailId;
	@Column
	private String password;
	
	@OneToMany(targetEntity = Order.class, mappedBy = "custid", orphanRemoval = false, fetch = FetchType.LAZY)
	private Set<Order> order;
	@OneToMany(targetEntity = Review.class, mappedBy = "custid", orphanRemoval = false, fetch = FetchType.LAZY)
	private Set<Review> review;
	public String getCustid() {
		return custid;
	}
	public void setCustid(String custid) {
		this.custid = custid;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Set<Order> getOrder() {
		return order;
	}
	public void setOrder(Set<Order> order) {
		this.order = order;
	}
	public Set<Review> getReview() {
		return review;
	}
	public void setReview(Set<Review> review) {
		this.review = review;
	}
	@Override
	public int hashCode() {
		return Objects.hash(custid, emailId, firstName, lastName, order, password, review);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Customer other = (Customer) obj;
		return Objects.equals(custid, other.custid) && Objects.equals(emailId, other.emailId)
				&& Objects.equals(firstName, other.firstName) && Objects.equals(lastName, other.lastName)
				&& Objects.equals(order, other.order) && Objects.equals(password, other.password)
				&& Objects.equals(review, other.review);
	}
	@Override
	public String toString() {
		return "Customer [custid=" + custid + ", firstName=" + firstName + ", lastName=" + lastName + ", emailId="
				+ emailId + ", password=" + password + ", order=" + order + ", review=" + review + "]";
	}
	public Customer(String custid, String firstName, String lastName, String emailId, String password, Set<Order> order,
			Set<Review> review) {
		super();
		this.custid = custid;
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.password = password;
		this.order = order;
		this.review = review;
	}
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}