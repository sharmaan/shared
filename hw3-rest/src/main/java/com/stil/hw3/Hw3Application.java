package com.stil.hw3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.stil.hw3.repository.SurveyRepository;

/**
 Anjali Sharma and group - see attached ReadMe and instructions document for group members' names
 Spring boot starter class that starts the application
 */
@SpringBootApplication
public class Hw3Application {

	@Autowired SurveyRepository repo;
	
	public static void main(String[] args) {
		SpringApplication.run(Hw3Application.class, args);
	}
}
