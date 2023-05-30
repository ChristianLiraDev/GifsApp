import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  public get searchedTags(): string[] {
    return this._gifsService.tagHistory;
  }

  constructor(private _gifsService: GifsService) {}

  ngOnInit(): void {}

  searchTag(tag: string): void {
    this._gifsService.searchTag(tag);
  }
}
