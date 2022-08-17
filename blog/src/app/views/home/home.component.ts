
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts:any = []
  constructor(private $http: DataService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts(){
    this.$http.getData().subscribe((data:any)=>{
      this.posts = data
      console.log(this.posts)
    })
  }

  goToPost(id:number){
    this.router.navigateByUrl('/post/' + id)
  }
}
