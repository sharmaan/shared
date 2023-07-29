package com.stil.hw3.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stil.hw3.entity.Survey;
/**
Anjali Sharma and group - see attached ReadMe and instructions document for group members' names
Repository interface extending JpaRepository which by default provides CRUD operations eliminating boiler code otherwise written by developer
*/
public interface SurveyRepository extends JpaRepository<Survey,Integer> {
    Survey findByFirstName(String name);
}

