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
user = {
  username: '',
  email: '',
  secretQuestion: '',
  answer:'',
  gender:''
}
submitted = false
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
    this.submitted = true
   this.user.username= this.signUpForm.value.userData.username
   this.user.email= this.signUpForm.value.userData.email
   this.user.secretQuestion= this.signUpForm.value.secret
   this.user.answer= this.signUpForm.value.questionAnswer
   this.user.gender= this.signUpForm.value.gender
  }
}
