import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../service/category.service';

interface CategoryItem {
  title: string;
  info: {
    href: string;
    imgUrl: string;
    title: string;
  }[];
};

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  category: CategoryItem[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategory();
  }

  private getCategory() {
    console.log(this.categoryService);
    this.categoryService.getCategory().subscribe(res => {
      if(res.code === 0) {
        this.category = <CategoryItem[]>res.data;
      }
    });
  }

  private handleClick(href) {
    console.log(href);
  }
}
