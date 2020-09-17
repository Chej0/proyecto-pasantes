import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { Screen1Component } from './components/screen1/screen1.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog',
    component: BlogComponent,
    children: [
      { path: '',  loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)}
    ]
  },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: Screen1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
