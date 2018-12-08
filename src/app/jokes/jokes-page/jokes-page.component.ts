import { Component, OnInit } from '@angular/core';
import { JokesService } from 'src/app/jokes/services/jokes.service';
import { Joke } from '../models/joke';

@Component({
  selector: 'app-jokes-page',
  templateUrl: './jokes-page.component.html',
  styleUrls: ['./jokes-page.component.scss']
})
export class JokesPageComponent implements OnInit {
  jokes: Joke[] = [];
  favoriteJokes: Joke[] = [];

  constructor(
    private jokesService: JokesService
  ) { }

  ngOnInit() {
    this.getJokes();
  }
  favoriteAdd(joke: Joke) {
    this.favoriteJokes.push(joke);
  }

  favoriteDelete(joke: Joke) {
    const jokeId = this.favoriteJokes.findIndex((item: Joke) => item.id === joke.id);
    if (jokeId !== -1) {
      this.favoriteJokes.splice(jokeId, 1);
    }
  }

  private getJokes() {
    this.jokesService.getJokes()
      .subscribe({
        next: res => {
          this.jokes = res;
          console.log(this.jokes);
        },
        error: err => { console.log(err); }
      });
  }

}
