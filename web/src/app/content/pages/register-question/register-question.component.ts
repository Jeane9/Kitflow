import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-register-question',
  templateUrl: './register-question.component.html',
  styleUrls: ['./register-question.component.css']
})
export class RegisterQuestionComponent implements OnInit {
  public Editor = ClassicEditor;
  courses = [
    { value: 'course-1', viewValue: 'Curso 1' },
    { value: 'course-2', viewValue: 'Curso 2' },
    { value: 'course-3', viewValue: 'Curso 3' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
