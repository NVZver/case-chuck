import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Joke } from '../models/joke';

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.scss']
})
export class JokesListComponent implements OnInit {
  @Input() jokes: Joke[];
  @Input() isFavorite = false;
  @Output() jokeSelected: EventEmitter<Joke> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  favoriteAdd(joke: Joke) {
    this.jokeSelected.emit(joke);
  }

  getIcon() {
    return this.isFavorite ? 'clear' : 'favorite';
  }
}
