import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
/**
 * SWE-642 group : Anjali Sharma, Rachna Latkar, Bantwal Shreyas Mallya, Govind Sharma
 */
interface Survey {
    id:number;
	  firstName:string;
	  lastName:string
	  streetAddr:string;
	  city:string;
	  state:string;
	  zip:string;
	  phone:string;
	  email:string;
	  dtSurvey:string;
	  mostLiked:string;
	  interestSource:string;
	  likelyToRecommend:string;
	  comments:string;
}

@Component({
  selector: 'app-surveysuccess',
  templateUrl: './surveysuccess.component.html',
  styleUrls: ['./surveysuccess.component.css']
})
export class SurveysuccessComponent implements OnInit {

  constructor( private svc:SurveyService ) { }

  ngOnInit(): void {
    this.getSurvey();
  }

  surveyFromAPI:Survey[];
  getSurvey()
  {
    this.svc.getSurvey().subscribe((data=>{
      console.log(data);
      this.surveyFromAPI=data;
    }));
  }

}
