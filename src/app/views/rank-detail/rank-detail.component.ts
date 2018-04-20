import { Component, OnInit } from '@angular/core';
import { RankDetailService } from '../../service/rank-detail.service';
import { ActivatedRoute } from '@angular/router';

interface ExploreDetail {
  title: string;
  explore: {
    imgUrl: string;
    menuName: string;
    author: string;
    doneNum: string;
    authorImg: string;
    href: string;
  }[];
};

@Component({
  selector: 'app-rank-detail',
  templateUrl: './rank-detail.component.html',
  styleUrls: ['./rank-detail.component.scss']
})
export class RankDetailComponent implements OnInit {
  rankDetail: ExploreDetail = {
    title: '',
    explore: []
  };

  constructor(
    private rankDetailService: RankDetailService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let type = this.route.snapshot.paramMap.get('type');
    this.getRankDetail(type);
  }

  getRankDetail(type: string): void {
    this.rankDetailService.getRankDetail(type).subscribe(res => {
      if (res.code === 0) {
        this.rankDetail = <ExploreDetail>res.data;
      }
    });
  }
}
