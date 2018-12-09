import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Joke } from 'src/app/jokes/models/joke';

@Component({ selector: 'app-jokes-list', template: '' })
export class JokesListStubComponent {
    @Input() jokes: Joke[];
    @Input() favoriteIds: number[] = [];
    @Input() favoriteMode = false;
    @Output() jokeSelected: EventEmitter<Joke> = new EventEmitter();

}
