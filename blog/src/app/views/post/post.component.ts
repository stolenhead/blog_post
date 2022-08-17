import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  comments:any=[];
  constructor(private $http: DataService) { }

  ngOnInit(): void {
    this.getComments()
  }

  getComments(){
    this.$http.getComments().subscribe((data:any)=>{
      this.comments = data
    })
  }
}
