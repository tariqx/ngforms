import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileEditorComponent } from '../app/components/profile-editor/profile-editor.component'
import { SummaryComponent } from '../app/components/summary/summary.component'

const routes: Routes = [
  {
    path: 'profile-editor/:id',
    component: ProfileEditorComponent
  },
  {
    path: 'summary',
    component: SummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
