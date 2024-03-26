import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit{
  students: Student[] = [];
  formGroupStudent: FormGroup;

  ngOnInit(): void {
    this.loadStudents();
  }
  
  loadStudents(){
    this.service.getStudents().subscribe({
      next: data => this.students = data
    });
  }

  constructor(private formBuilder: FormBuilder,
              private service: StudentService
    ){
    this.formGroupStudent = formBuilder.group({
      id : [''],
      name : [''],
      course : ['']
    });
  }

  save(){
    this.service.save(this.formGroupStudent.value).subscribe({
      next: data => this.students.push  (data)
    });
  
  }
}
