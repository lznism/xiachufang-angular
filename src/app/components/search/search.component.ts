import { Component, OnInit } from '@angular/core';
import { SearchResultService } from '../../service/search-result.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    constructor(
        private searchResultService: SearchResultService,
        private router: Router
    ) {}

    ngOnInit() {
    }

    handleSearch(e) {
        if (e.keyCode === 13) {
            if (!e.target.value) return;
            this.getSearch(e.target.value);
        }
    }

    getSearch(keyword: string) {
        this.searchResultService.getSearch(keyword).subscribe(res => {
            if (res.code === 0) {
                if (res.isRedirect) {
                    let url = res.redirectUrl.match(/\/category\/\d+/)[0];
                    this.router.navigate([url]);
                } else {
                    this.router.navigate(['search'], {queryParams: {keyword}});
                }
            }
        });
    }
}
