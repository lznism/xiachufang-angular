import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { CategoryComponent } from './views/category/category.component';
import { CategoryItemComponent } from './views/category-item/category-item.component';
import { MenuItemComponent } from './views/menu-item/menu-item.component';
import { RankDetailComponent } from './views/rank-detail/rank-detail.component';
import { SearchResultComponent } from './views/search-result/search-result.component';
import { HomeService } from './service/home.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { CategoryService } from './service/category.service';
import { MenuItemService } from './service/menu-item.service';
import { RankDetailService } from './service/rank-detail.service';
import { CategoryItemPopComponent } from './views/category-item/category-item-pop.component';
import { CategoryItemRecentComponent } from './views/category-item/category-item-recent.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { SearchComponent } from './components/search/search.component';
import { CategoryItemService } from './service/category-item.service';
import { SearchResultService } from './service/search-result.service';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'category',
  component: CategoryComponent
}, {
  path: 'category/:id',
  redirectTo: 'category/:id/pop',
  pathMatch: 'full'
}, {
  path: 'category/:id',
  component: CategoryItemComponent,
  children: [{
    path: 'pop',
    component: CategoryItemPopComponent
  }, {
    path: 'recent',
    component: CategoryItemRecentComponent
  }]
}, {
  path: 'recipe/:id',
  component: MenuItemComponent
}, {
  path: 'explore/:type',
  component: RankDetailComponent
}, {
  path: 'search',
  component: SearchResultComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    CategoryItemComponent,
    MenuItemComponent,
    RankDetailComponent,
    SearchResultComponent,
    HeaderComponent,
    CategoryItemPopComponent,
    CategoryItemRecentComponent,
    MenuListComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    HomeService,
    CategoryService,
    MenuItemService,
    RankDetailService,
    CategoryItemService,
    SearchResultService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
