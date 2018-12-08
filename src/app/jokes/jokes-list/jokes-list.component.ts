import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Joke } from '../models/joke';

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.scss']
})
export class JokesListComponent implements OnInit {
  @Input() jokes: Joke[];
  @Input() favoriteIds: number[] = [];
  @Input() favoriteMode = false;
  @Output() jokeSelected: EventEmitter<Joke> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  favoriteAdd(joke: Joke) {
    if (!this.isFavorite(joke.id)) {
      this.jokeSelected.emit(joke);
    }
  }

  getIcon() {
    return this.favoriteMode ? 'clear' : 'favorite';
  }

  isFavorite(jokeId: number): boolean {
    return this.favoriteIds.includes(jokeId);
  }
}
