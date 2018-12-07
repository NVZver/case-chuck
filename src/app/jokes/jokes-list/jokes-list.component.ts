import { Component, OnInit, Input } from '@angular/core';
import { Joke } from '../models/joke';

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.scss']
})
export class JokesListComponent implements OnInit {
  @Input() jokes: Joke[];
  constructor() { }

  ngOnInit() {
  }

}
