import { Component, OnInit } from '@angular/core';
import { MenuItemService } from '../../service/menu-item.service';
import { ActivatedRoute } from '@angular/router';


interface Material {
  ingredient: string;
  weight: string;
};

interface Step {
  subTitle: string;
  description: String;
  stepImg?: string;
}

interface MenuDetail {
  headImgUrl?: string;
  title: string;
  rate: string;
  doneNum: string;
  description: string;
  author: string;
  avatar: string;
  materials: Material[];
  steps: Step[];
};

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  detail: MenuDetail = {
    headImgUrl: '',
    title: '',
    rate: '',
    doneNum: '',
    description: '',
    author: '',
    avatar: '',
    materials: [],
    steps: []
  };
  constructor(
    private menuItemService: MenuItemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getMenuDetail(id);
  }

  private getMenuDetail(id: number): void {
    this.menuItemService.getMenuDetail(id).subscribe(res => {
      if(res.code === 0) {
        this.detail = <MenuDetail>res.data;
      }
    });
  }
}
