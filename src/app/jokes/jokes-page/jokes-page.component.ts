import { Component, OnInit, Input } from '@angular/core';
import { JokesService } from 'src/app/jokes/services/jokes.service';
import { Joke } from '../models/joke';
import { interval, Subject } from 'rxjs';
import { mergeMap, map, takeUntil } from 'rxjs/operators';

const INTERVAL = 5000;
const FAVORITE_JOKES__COUNT_MAX = 10;

@Component({
  selector: 'app-jokes-page',
  templateUrl: './jokes-page.component.html',
  styleUrls: ['./jokes-page.component.scss']
})
export class JokesPageComponent implements OnInit {
  favoriteJokesMax = FAVORITE_JOKES__COUNT_MAX;
  jokes: Joke[] = [];
  favoriteJokes: Joke[] = [];
  timer = interval(INTERVAL).pipe(
    mergeMap(() => this.getJokes(1)),
    map(jokes => jokes[0])
  );
  timer$: Subject<any>;
  private _storTimer$ = new Subject<boolean>();

  constructor(
    private jokesService: JokesService
  ) { }

  ngOnInit() {
    this.refreshJokes();
  }

  favoriteAdd(joke: Joke) {
    if (!this.isFavoriteListFull()) {
      this.favoriteJokes.push(joke);
    }
  }

  isFavoriteListFull(): boolean {
    return this.favoriteJokes.length === FAVORITE_JOKES__COUNT_MAX;
  }

  favoriteDelete(joke: Joke) {
    const jokeId = this.favoriteJokes.findIndex((item: Joke) => item.id === joke.id);
    if (jokeId !== -1) {
      this.favoriteJokes.splice(jokeId, 1);
    }
  }

  switchTimer(event) {
    if (event.checked) {
      this.startJokeTimer();
    } else {
      this.stopJokeTimer();
    }
  }

  getFavoriteIds() {
    return this.favoriteJokes.map(joke => joke.id);
  }

  refreshJokes() {
    this.getJokes().subscribe({
      next: res => {
        this.jokes = res;
      },
      error: err => { console.log(err); }
    });


  }

  clearFavoriteJokes() {
    this.favoriteJokes = [];
  }

  private startJokeTimer() {
    this.timer.pipe(
      takeUntil(this._storTimer$)
    ).subscribe((joke: Joke) => {
      if (this.isFavoriteListFull()) {
        this.stopJokeTimer();
      } else {
        this.favoriteAdd(joke);
      }
    });
  }

  private stopJokeTimer() {
    this._storTimer$.next(true);
  }

  private getJokes(count: number = 10) {
    return this.jokesService.getJokes(count);
  }

}
