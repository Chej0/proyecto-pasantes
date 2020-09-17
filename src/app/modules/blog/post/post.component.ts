import { AfterContentChecked, AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts = [
    {
      id: 1,
      descripcion: 'POST NUMERO 1 DE PRUEBA'
    },
    {
      id: 2,
      descripcion: 'POST NUMERO 2  ESTE DEBE MOSTRAR OTRA COSA'
    },
    {
      id: 3,
      descripcion: 'POST NUMERO 3 ESTE ES EL ULTIMP POST'
    }
  ];

  currentPost: any;
  constructor(public router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe((r) => {
      console.log(r);
      const index = this.posts.findIndex(p => p.id === +r.id);
      if (index > -1) {
        this.currentPost = this.posts[index];
      }
    });
  }

}
