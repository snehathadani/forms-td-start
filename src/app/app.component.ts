import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static: true}) signUpForm: NgForm;
  defaultQuestion = 'teacher'
  answer= "";
  genders =['male', 'female']

  // onSubmit(form:NgForm){
  //   console.log(form)
  // }
  suggestedUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: 'tt@gmail.com'
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // })
     this.signUpForm.form.patchValue({userData: {
    username: 'Superuser'
   }})
  }
  
  onSubmit() {
    console.log("signupForm",this.signUpForm)
  }
}
