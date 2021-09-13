import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';

const routes: Routes = [

  {
    path: '',
    children: [
      { path: '', component: FullScreenComponent },
      { path: '**', redirectTo: 'fullscreen'}
    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BetsRoutingModule { }
