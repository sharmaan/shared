import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { SurveyService } from '../survey.service';
import {Survey} from '../survey';
import { Route, Router } from '@angular/router';
import {FormBuilder,FormGroup,FormArray,FormControl,ValidatorFn,FormControlName} from '@angular/forms'
/**
SWE-642 group : Anjali Sharma, Rachna Latkar, Bantwal Shreyas Mallya, Govind Sharma
**/
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  survey = new Survey();
  msg='';
  mostLikedAll:boolean=false;
  mostLiked=[

    {name:"Students",value:"students",id:1,select:false},
    {name:"Location",value:"location",id:2,select:false},
    {name:"Campus",value:"campus",id:3,select:false},
    {name:"Atmosphere",value:"atmosphere",id:4,select:false},
    {name:"Dorm Rooms",value:"dorm rooms",id:5,select:false},
    {name:"Sports",value:"sports",id:6,select:false}
  ]
  interestSource=[
    {name:"Friends",value:"Friends",id:1,select:false},
    {name:"Television",value:"Television",id:2,select:false},
    {name:"Internet",value:"Internet",id:3,select:false},
    {name:"Other",value:"Other",id:4,select:false}
  ]
  values:any=[];
  y:string="";

  onChangeSource($event)
  {
    console.log("$event.target.select=",$event.target.checked)
    if($event.target.checked==true)
    {
      console.log("this is true , add to string");
      this.survey.interestSource=  $event.target.value;
    }
    else if  ($event.target.checked==false)
    {
    console.log("this is false , remove from string");
    this.survey.interestSource=  this.survey.interestSource.replace($event.target.value,"");
    }
    const value = $event.target.value;
    const ischecked=$event.target.checked;
    console.log("interest source value= ",value);
    console.log("interest source clicked= ",ischecked);
  }

  onChange($event:any)
  {
    console.log("$event.target.select=",$event.target.checked)
    if($event.target.checked==true)
    {
      console.log("this is true , add to string");
      this.y=  this.y.concat($event.target.value).concat(",");
    }
    else if  ($event.target.checked==false)
    {
    //remove option from y
    console.log("this is false , remove from string");
    this.y= this.y.replace($event.target.value,"");
    }
    const value = $event.target.value;
    const ischecked=$event.target.checked;

    this.values=this.mostLiked.map((d)=>{
      if(d.value==value)
      {
        d.select=ischecked;
        this.mostLikedAll=false;
        return d;
      }
         return d;
    })
       this.survey.mostLiked=this.y.toString();
    this.survey.mostLiked=this.y;
    console.log("this.y.toString()=",this.y);
  }

  constructor(private svc:SurveyService,private _router:Router) { }
  ngOnInit(): void
   {
    this.survey.likelyToRecommend="Very Likely";
    }

  postsurvey()
  {
    this.svc.postSurvey(this.survey).subscribe
    (
     data=>{
        console.log("response received");
        this.msg=`Thank you for your feedback  ${this.survey.firstName} ${this.survey.lastName}!!!!`;
        // this._router.navigate(['/surveysuccess']);
    },
     error=>
      {
        console.log("exception occured");
        this.msg='Bad form data. Check form again.';
        this.msg='Thank you for your feedback!!!!';
      }
    );
  }
  clear()
  {
    this.msg="";
  }


}
