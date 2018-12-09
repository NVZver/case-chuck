import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Joke } from 'src/app/jokes/models/joke';

@Injectable()
export class JokesStubService {
    constructor() { }

    getJokes(count: number = 10): Observable<Joke[]> {
        return of([]);
    }
}
