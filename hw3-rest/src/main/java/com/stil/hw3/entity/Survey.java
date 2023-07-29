package com.stil.hw3.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
Anjali Sharma and group - see attached ReadMe and instructions document for group members' names
Entity class mapped to Survey table at MySql database defined in application.properties file
*/
@Entity
@Table(name = "Survey")
public class Survey implements Serializable{
	private static final long serialVersionUID = 1L;
	@Id
    @GeneratedValue
    private int id;
	private String firstName;
	private String lastName;
	private String streetAddr;
	private String city;
	private String state;
	private String zip;
	private String phone;
	private String email;
	private String dtSurvey;
	private String mostLiked;
	private String interestSource;
	private String likelyToRecommend;
	private String comments;
    
    public int getId() {
  		return id;
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

	public String getStreetAddr() {
		return streetAddr;
	}

	public void setStreetAddr(String streetAddr) {
		this.streetAddr = streetAddr;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getZip() {
		return zip;
	}

	public void setZip(String zip) {
		this.zip = zip;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDtSurvey() {
		return dtSurvey;
	}

	public void setDtSurvey(String dtSurvey) {
		this.dtSurvey = dtSurvey;
	}

	public String getMostLiked() {
		return mostLiked;
	}

	public void setMostLiked(String mostLiked) {
		this.mostLiked = mostLiked;
	}

	public String getInterestSource() {
		return interestSource;
	}

	public void setInterestSource(String interestSource) {
		this.interestSource = interestSource;
	}

	public String getLikelyToRecommend() {
		return likelyToRecommend;
	}

	public void setLikelyToRecommend(String likelyToRecommend) {
		this.likelyToRecommend = likelyToRecommend;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

}
