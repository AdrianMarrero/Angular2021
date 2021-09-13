import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: 'loteria/home',
    loadChildren: () => import('./bets/bets.module').then( m => m.BetsModule)
  },
  {
    path: '**',
    redirectTo: 'loteria/home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
