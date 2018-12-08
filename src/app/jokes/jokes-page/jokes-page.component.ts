import { Component, OnInit } from '@angular/core';
import { JokesService } from 'src/app/jokes/services/jokes.service';
import { Joke } from '../models/joke';
import { interval, Subject } from 'rxjs';
import { mergeMap, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-jokes-page',
  templateUrl: './jokes-page.component.html',
  styleUrls: ['./jokes-page.component.scss']
})
export class JokesPageComponent implements OnInit {
  jokes: Joke[] = [];
  favoriteJokes: Joke[] = [];
  timer = interval(5000).pipe(
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
    if (this.favoriteJokes.length < 10) {
      this.favoriteJokes.push(joke);
    }
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
      if (this.favoriteJokes.length === 9) {
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
