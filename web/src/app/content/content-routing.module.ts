import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterQuestionComponent } from './pages/register-question/register-question.component';
import { MonitoringComponent } from './pages/monitoring/monitoring.component';
import { RegisterKidComponent } from './pages/register-kid/register-kid.component';
import { ListQuestionsComponent } from './pages/list-questions/list-questions.component';
import { QuestionDetailComponent } from './pages/question-detail/question-detail.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'list-questions',
    component: ListQuestionsComponent
  },
  {
    path: 'question-detail',
    component: QuestionDetailComponent
  },
  {
    path: 'register-question',
    component: RegisterQuestionComponent
  },
  {
    path: 'register-kid',
    component: RegisterKidComponent
  },
  {
    path: 'monitoring',
    component: MonitoringComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
