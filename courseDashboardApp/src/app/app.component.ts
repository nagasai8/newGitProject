import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 

{

  courses = ["Angular4", "HTML", "Javascript", "Reactjs", "Angular Js", "Dust"];
  
  newCourse = "";

  pushCourse = function () 
   
   {
  		if (this.newCourse ! = "") 
  		{
  			this.courses.push(this.newCourse);
     		this.newCourse = "";

  		}
   }
  

}
