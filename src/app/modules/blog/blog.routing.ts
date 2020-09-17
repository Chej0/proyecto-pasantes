import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
export const blogRoutes: Routes = [
    { path: '', component: BlogComponent },
    { path: 'post/:id', component: PostComponent }
];
