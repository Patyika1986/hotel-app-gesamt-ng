import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav.component';


const routes: Routes = [
  {
    path: 'nav', component: NavComponent
  },
  {
    path: 'first',
    loadChildren: () => import('./first/first.module').then(x => x.FirstModule)
  },
  {
    path: 'second',
    loadChildren: () => import('./second/second.module').then(x => x.SecondModule)
  },
  {
    path: 'third',
    loadChildren: () => import('./third/third.module').then(x => x.ThirdModule)
  },
  {
    path: 'data',
    loadChildren: () => import('./data/data.modules').then(x => x.DataModule)
  },
  {
    path: 'track',
    loadChildren: () => import('./trackBy/trackby.module').then(x => x.TrackbyModule)
  },
  {
    path:'', redirectTo: 'nav', pathMatch: 'full'
  }
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
