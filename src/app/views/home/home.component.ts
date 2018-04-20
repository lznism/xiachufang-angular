import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { HttpResponse } from '../../interface/response';

interface HomeHeadItem {
  imgUrl: string;
  title: string;
  description: string;
  href: string;
};

interface HomeBodyItem {
  imgUrl: string;
  href: string;
  title: string;
  rate: string;
  doneNum: string;
};

interface HomeItem {
  head: HomeHeadItem[];
  body: HomeBodyItem[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  rankMenu: HomeItem = {
    head: [],
    body: []
  };
  popMenu: HomeItem = {
    head: [],
    body: []
  };
  risingMenu: HomeItem = {
    head: [],
    body: []
  };

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getHomeData();
  }

  private getHomeData() {
    this.homeService.getHome().subscribe(res => {
      if (res.code === 0) {
        this.rankMenu.head = res.data.rankHead;
        this.rankMenu.body = res.data.rankBody;
        this.popMenu.head = res.data.popHead;
        this.popMenu.body = res.data.popBody;
        this.risingMenu.head = res.data.newMenuHead;
        this.risingMenu.body = res.data.newMenuBody;
      }
    });
  }

}
