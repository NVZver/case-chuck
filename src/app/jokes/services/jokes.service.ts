import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Joke } from 'src/app/jokes/models/joke';
import { map } from 'rxjs/operators';

const BASE_URL = 'http://api.icndb.com';

@Injectable()
export class JokesService {
    constructor(
        private http: HttpClient
    ) {

    }

    getJokes(count: number = 10): Observable<Joke[]> {
        const method = 'GET';
        const url = `${BASE_URL}/jokes/random/${count}`;
        const options = {};
        return this.http.request(method, url, options).pipe(
            map((res: any) => {
                return res.type === 'success' ? res.value : [];
            })
        );
    }
}
