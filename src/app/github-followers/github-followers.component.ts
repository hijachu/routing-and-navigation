import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './../services/github-followers.service';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {
    // let id = this.route.snapshot.paramMap['id'];
    this.route.paramMap.subscribe(params => {

    });

    // let page = this.route.snapshot.queryParamMap['page'];
    this.route.queryParamMap.subscribe(params => {
      
    });

    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }

}
