import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SearchBoxComponent } from './components/app-search-box/app-search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';

const components = [HomepageComponent, SearchBoxComponent, CardListComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule],
  exports: [components],
})
export class GifsModule {}
