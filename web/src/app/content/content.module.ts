import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterQuestionComponent } from './pages/register-question/register-question.component';
import { MonitoringComponent } from './pages/monitoring/monitoring.component';
import { RegisterKidComponent } from './pages/register-kid/register-kid.component';
import { ListQuestionsComponent } from './pages/list-questions/list-questions.component';
import { QuestionDetailComponent } from './pages/question-detail/question-detail.component';


@NgModule({
  declarations: [DashboardComponent, RegisterQuestionComponent, MonitoringComponent, RegisterKidComponent, ListQuestionsComponent, QuestionDetailComponent],
  imports: [
    CommonModule,
    ContentRoutingModule,

    SharedModule
  ]
})
export class ContentModule { }
