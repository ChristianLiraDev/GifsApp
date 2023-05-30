import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs-service.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './app-search-box.component.html',
  styleUrls: ['./app-search-box.component.css'],
})
export class SearchBoxComponent implements OnInit {
  @ViewChild('txtTagInput') tagInput!: ElementRef<HTMLInputElement>;

  constructor(private _gifsService: GifsService) {}

  ngOnInit(): void {}

  searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;
    this._gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
