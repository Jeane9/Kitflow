import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { GravatarModule } from 'ngx-gravatar';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';  
import { StarRatingModule } from 'angular-star-rating';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    GravatarModule,
    CKEditorModule,
    StarRatingModule.forRoot()
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    RecaptchaModule,
    GravatarModule,
    CKEditorModule,
    StarRatingModule
  ]
})
export class SharedModule { }
