import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  public gifsList: Gif[] = [];

  private API_KEY: string = 'buR9pgcSIUPbvO1WEVZnDgXXUjXKSYX0';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  private _tagHistory: string[] = [];

  constructor(private _httpClient: HttpClient) {}

  public get tagHistory(): string[] {
    return [...this._tagHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter((oldtag) => oldtag !== tag);
    }

    this._tagHistory.unshift(tag);

    this._tagHistory = this.tagHistory.splice(0, 10);
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;

    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.API_KEY)
      .set('limit', '10')
      .set('q', tag);

    this._httpClient
      .get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((resp) => {
        this.gifsList = resp.data;
        console.log({ gifs: this.gifsList });
      });
  }
}
