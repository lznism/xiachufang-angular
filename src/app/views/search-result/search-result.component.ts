import { Component, OnInit } from '@angular/core';
import { SearchResultService } from '../../service/search-result.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryListItem } from '../../interface/category-list-item';

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
    list: CategoryListItem[] = [];

    constructor(
        private searchResultService: SearchResultService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        let keyword = this.route.snapshot.queryParamMap.get('keyword');
        this.searchResultService.getSearch(keyword).subscribe(res => {
            if (res.code === 0 && !res.isRedirect) {
                this.list = <CategoryListItem[]>res.data;
                console.log(this.list);
            }
        });
    }

}
