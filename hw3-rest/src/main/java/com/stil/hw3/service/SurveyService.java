package com.stil.hw3.service;

import com.stil.hw3.entity.Survey;
import com.stil.hw3.repository.SurveyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
/**
Anjali Sharma and group - see attached ReadMe and instructions document for group members' names
Service class which takes command from controller and communicates with Repository to perform requested CRUD operations
*/
@Service
public class SurveyService {
    @Autowired
    private SurveyRepository repository;

    public Survey saveSurvey(Survey survey) {
        return repository.save(survey);
    }

    public List<Survey> saveSurveys(List<Survey> surveys) {
        return repository.saveAll(surveys);
    }

    public List<Survey> getSurveys() {
        return repository.findAll();
    }

    public Survey getSurveyById(int id) {
        return repository.findById(id).orElse(null);
    }

    public Survey getSurveyByName(String name) {
        return repository.findByFirstName(name);
    }

    public String deleteSurvey(int id) {
        repository.deleteById(id);
        return "Survey with Id = "+id+" is removed !! " ;
    }

    public Survey updateSurvey(Survey survey) {
        Survey existingSurvey = repository.findById(survey.getId()).orElse(null);
        existingSurvey.setFirstName(survey.getFirstName());
        existingSurvey.setLastName(survey.getLastName());
        existingSurvey.setStreetAddr(survey.getStreetAddr());
        existingSurvey.setCity(survey.getStreetAddr());
        existingSurvey.setState(survey.getState());
        existingSurvey.setZip(survey.getZip());
        existingSurvey.setPhone(survey.getPhone());
        existingSurvey.setEmail(survey.getEmail());
        existingSurvey.setDtSurvey(survey.getDtSurvey());
        existingSurvey.setMostLiked(survey.getMostLiked());
        existingSurvey.setInterestSource(survey.getInterestSource());
        existingSurvey.setLikelyToRecommend(survey.getLikelyToRecommend());
        existingSurvey.setComments(survey.getComments());
        return repository.save(existingSurvey);
    }


}
