import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { RouterModule } from '@angular/router';
import { blogRoutes } from './blog.routing';



@NgModule({
  declarations: [BlogComponent, PostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(blogRoutes)
  ]
})
export class BlogModule { }
