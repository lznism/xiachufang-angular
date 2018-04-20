import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-category-item',
    templateUrl: './category-item.component.html',
    styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {
    categoryItemTitle: string = '';
    popUrl: string;
    recentUrl: string;

    constructor(private route: ActivatedRoute) { }
    ngOnInit() {
        let id = this.route.snapshot.paramMap.get('id');
        this.popUrl = `/category/${id}/pop`;
        this.recentUrl = `/category/${id}/recent`;
    }
}
