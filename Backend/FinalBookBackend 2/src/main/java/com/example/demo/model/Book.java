package com.example.demo.model;
import java.util.Objects;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;




@Entity
public class Book {

	
	@Id
	String bookid;
	@Column
	String title;
	@Column
	String author;
	@Column
	String category;
	@Column
	boolean instock; 
	@Column
	double price;

	@OneToMany(targetEntity = Order.class, mappedBy = "bookid", orphanRemoval = false, fetch = FetchType.LAZY)
	private Set<Order> order;
	
	@OneToMany(targetEntity = Review.class, mappedBy = "bookid", orphanRemoval = false, fetch = FetchType.LAZY)
	private Set<Review> review;

	public String getBookid() {
		return bookid;
	}

	public void setBookid(String bookid) {
		this.bookid = bookid;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public boolean isInstock() {
		return instock;
	}

	public void setInstock(boolean instock) {
		this.instock = instock;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
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
		return Objects.hash(author, bookid, category, instock, order, price, review, title);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Book other = (Book) obj;
		return Objects.equals(author, other.author) && Objects.equals(bookid, other.bookid)
				&& Objects.equals(category, other.category) && instock == other.instock
				&& Objects.equals(order, other.order)
				&& Double.doubleToLongBits(price) == Double.doubleToLongBits(other.price)
				&& Objects.equals(review, other.review) && Objects.equals(title, other.title);
	}

	@Override
	public String toString() {
		return "Book [bookid=" + bookid + ", title=" + title + ", author=" + author + ", category=" + category
				+ ", instock=" + instock + ", price=" + price + ", order=" + order + ", review=" + review + "]";
	}

	public Book(String bookid, String title, String author, String category, boolean instock, double price,
			Set<Order> order, Set<Review> review) {
		super();
		this.bookid = bookid;
		this.title = title;
		this.author = author;
		this.category = category;
		this.instock = instock;
		this.price = price;
		this.order = order;
		this.review = review;
	}

	public Book() {
		super();
		// TODO Auto-generated constructor stub
	}
	
		
}
	