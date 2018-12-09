import { Component, OnInit, Input } from '@angular/core';
import { JokesService } from 'src/app/jokes/services/jokes.service';
import { Joke } from '../models/joke';
import { interval, Subject } from 'rxjs';
import { mergeMap, map, takeUntil } from 'rxjs/operators';
import { UserService } from 'src/app/services/user/user.service';

const INTERVAL = 5000;

@Component({
  selector: 'app-jokes-page',
  templateUrl: './jokes-page.component.html',
  styleUrls: ['./jokes-page.component.scss']
})
export class JokesPageComponent implements OnInit {
  get favoriteJokesMax(): number {
    return this.userService.favoriteMaxCount;
  }

  jokes: Joke[] = [];

  get favoriteJokes(): Joke[] {
    return this.userService.favoriteJokes;
  }

  timer = interval(INTERVAL).pipe(
    mergeMap(() => this.getJokes(1)),
    map(jokes => jokes[0])
  );

  timer$: Subject<any>;

  private _storTimer$ = new Subject<boolean>();

  constructor(
    private jokesService: JokesService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.refreshJokes();
  }

  favoriteAdd(joke: Joke) {
    this.userService.addFavoriteJoke(joke);
  }

  favoriteDelete(joke: Joke) {
    this.userService.deleteFavoriteJoke(joke);
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
    this.userService.clearFavoriteJokes();
  }

  private startJokeTimer() {
    this.timer.pipe(
      takeUntil(this._storTimer$)
    ).subscribe((joke: Joke) => {
      if (this.userService.isFavoriteListFull()) {
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
