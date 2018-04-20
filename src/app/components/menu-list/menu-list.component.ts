import { Component, OnInit, Input } from '@angular/core';
import { CategoryListItem } from '../../interface/category-list-item';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  @Input() list: CategoryListItem[] = [];

  constructor() {}

  ngOnInit() {}
}
