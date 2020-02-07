import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './../services/github-followers.service';
import { combineLatest } from 'rxjs';

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
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .subscribe(combined => {
      let id = combined[0].get('id');
      let page = combined[1]['page'];
      let order = combined[1]['order'];

      // this.service.getAll({ id: id, page: page, order: order })
      this.service.getAll()
        .subscribe(followers => this.followers = followers);
    });

/*    
    // let id = this.route.snapshot.paramMap['id'];
    this.route.paramMap.subscribe(params => {
    });

    // let page = this.route.snapshot.queryParamMap['page'];
    this.route.queryParamMap.subscribe(params => {
    });
*/
  }

}
