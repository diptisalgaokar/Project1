import { BuiltinTypeName } from '@angular/compiler';
//import { linkerPlugin } from '@angular/compiler-cli/linker/babel';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Starting chapter of Angular JS';

  firstName = ["Tom","Dick","Harry","John","Ram"];
  lastName = ["Paul","D'sa","Noronha","D'Souza","Mense"];
  message = 'Hello!!! This is my first piece of code in Angular.';
  salutation = 'Hurray!!!';
  checkVal = 0; 
  fontColor = 'red';
  canClick = false;

  showMsg(){
    alert(this.message +' <<->> '+ this.salutation);
    this.fontColor='blue';
    this.checkVal = 1;
  }

}


