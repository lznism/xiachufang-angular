import { Component, Input, OnInit } from '@angular/core';
import { CategoryListItem } from '../../interface/category-list-item';
import { ActivatedRoute } from '@angular/router';
import { CategoryItemService } from '../../service/category-item.service';

@Component({
    selector: 'app-category-item-pop',
    template: `<app-menu-list [list]="list"></app-menu-list>`
})
export class CategoryItemPopComponent implements OnInit {
    list: CategoryListItem[] = [];
    id: number;

    constructor(
        private route: ActivatedRoute,
        private categoryItemService: CategoryItemService
    ) {}
    ngOnInit() {
        this.route.parent.params.subscribe(params => {
            this.id = +params['id'];
        });
        this.getCategoryItem(this.id, 'recent');
    }

    getCategoryItem(id: number, type: string) {
        this.categoryItemService.getCategoryItem(id, type).subscribe(res => {
            if (res.code === 0) {
                this.list = <CategoryListItem[]>res.data;
            }
        });
    }
}