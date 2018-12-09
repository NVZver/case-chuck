import { Injectable } from '@angular/core';
import { Joke } from 'src/app/jokes/models/joke';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  favoriteMaxCount = 10;

  get name(): string {
    return this._name;
  }

  get favoriteJokes(): Joke[] {
    return this._favoriteJokes;
  }

  private _name: string;
  private _favoriteJokes: Joke[];

  constructor() {
    this._name = localStorage.getItem('userName') || 'Anonymous';
    this._favoriteJokes = JSON.parse(localStorage.getItem('favoriteJokes')) || [];
  }

  setName(name: string) {
    this._name = name;
    localStorage.setItem('userName', name);
  }

  addFavoriteJoke(joke: Joke) {
    this._favoriteJokes.push(joke);
  }

  storeFavoriteJokes(jokes = []) {
    localStorage.setItem('favoriteJokes', JSON.stringify(this._favoriteJokes));
  }

}
