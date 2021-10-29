import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenNames = ['Paul', 'Evane']

//initialize the form before rendering the tempalte
  ngOnInit() {
    const that = this
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.checkForbiddenNames.bind(that)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),

      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit() {
  console.log(this.signupForm)
  }
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    this.signupForm.get('hobbies');
    (<FormArray> this.signupForm.get('hobbies')).push(control)
  }
  checkForbiddenNames(control:FormControl): {[s:string]:boolean} {
    if(this.forbiddenNames.indexOf(control.value) !== -1){
      return ({'nameIsForbidden': true})
    }
    return null;
  }

}
