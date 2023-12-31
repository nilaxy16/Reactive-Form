import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactiveform';

  registrationForm : FormGroup;

  constructor(private fb: FormBuilder) { 
    this.registrationForm = this.fb.group({
      firstname: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]),
      confirmpassword: new FormControl('', [Validators.required]),
    },
    {
      validators: this.MustMatch('password','confirmpassword')
    }) 
  }
  

  MustMatch(password : string, confirmpassword:string)
  {
    return(formGroup:FormGroup) => {
      const pwdcontrol = formGroup.controls[password];
      const cpwdcontrol = formGroup.controls[confirmpassword];

      if (cpwdcontrol.errors && !cpwdcontrol.errors['ConfirmPasswordValidator']) {
        return;
      }
      
      if (pwdcontrol.value !== cpwdcontrol.value) {
        cpwdcontrol.setErrors({ MustMatch: true });
      } else {
        cpwdcontrol.setErrors(null);
      }
    }
  }
  
}
