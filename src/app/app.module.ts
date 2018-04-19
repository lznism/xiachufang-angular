import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { CategoryComponent } from './views/category/category.component';
import { CategoryItemComponent } from './views/category-item/category-item.component';
import { MenuItemComponent } from './views/menu-item/menu-item.component';
import { RankDetailComponent } from './views/rank-detail/rank-detail.component';
import { SearchResultComponent } from './views/search-result/search-result.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'category',
  component: CategoryComponent
}, {
  path: 'category/:id',
  component: CategoryItemComponent
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
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
