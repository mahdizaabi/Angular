import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  default_question = 'pet'
  xxx: string= "";
  twoWayBindingData: string = "";
  genders = ['male', 'female', 'transexuel', 'bisexuel']
  genderValue: string = 'female'
  userName:string = ''
  user = {
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    /*
    this.signupForm.setValue({
      userData:{
        username : suggestedName,
        email: ''
      },
      secret: 'pet',
      adresse:'workss',
      gender: 'male',
      details:''
    })
    downside: it override all the forms values if they are already inputed
    */
  this.signupForm.form.patchValue({userData:{username:suggestedName}})

  }

  onSubmit(e: NgForm) {
    console.log(e.form.value)
    this.user = {...this.signupForm.form.value, ...this.signupForm.form.value.userData};
    this.signupForm.form.reset()

  }
  handelClick(email,userData) {
    console.log(email, userData)
  }
  handelChange(event) {
    //console.log(event)
  }

  setUserName() {
    this.userName = "mahdi"
  }
}
