import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// what ever we write here, can be binded with HTML . because template url of HTML is added //
// So, title is binded with HTML Page //

export class AppComponent {
  title = 'app works';

  obj = 
  {
  	id : "1",
  	name : "Angular4"
  }

 arr = ["abc", "def", "xyz", "pqr"];

 isTrue = true;
 myName = "Angular 4";


}
