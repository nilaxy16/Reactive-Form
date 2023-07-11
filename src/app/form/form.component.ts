import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from './Modal/Student';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  student: Student = new Student();
  addForm : FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { 
    this.addForm = this.fb.group({
      studentid: new FormControl('', [Validators.required]),
      fullname: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {

  }

  addStudent() {
    //this.dataservice.addStudent(this.student).subscribe();
    console.log(this.student);
    window.location.reload();
  }

}
