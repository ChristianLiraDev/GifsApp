import { Component, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifsService } from '../../services/gifs-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {

  public get gifs(): Gif[] {
    return this._gifsService.gifsList;
  }

  constructor(private _gifsService: GifsService) {}

  ngOnInit(): void {}
}
