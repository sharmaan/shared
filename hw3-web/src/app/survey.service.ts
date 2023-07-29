import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Survey} from './survey';
import {Observable} from 'rxjs'

/**
 * SWE-642 group : Anjali Sharma, Rachna Latkar, Bantwal Shreyas Mallya, Govind Sharma
 * global service which talks to Rest API on API Base URL and get/post entry points
 */
@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private baseUrl:string="http://localhost:9191";

  constructor(private _http:HttpClient) { }

  public postSurvey(survey: Survey):Observable<any>{

     if( survey.mostLiked.startsWith(","))
    {
      survey.mostLiked=survey.mostLiked.replace(survey.mostLiked.charAt(0),"")
    }
    if( survey.mostLiked.endsWith(","))
    {
    survey.mostLiked= survey.mostLiked.substring(0,survey.mostLiked.length-1);
    }

    return this._http.post(`${this.baseUrl}/addSurvey`,survey);

  }

  public getSurvey():Observable<any>
  {
    return this._http.get(`${this.baseUrl}/surveys`);
  }

}
