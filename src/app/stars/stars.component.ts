import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input() value = 1

  constructor() { }

  ngOnInit() {
  }

  range (i) {
    return Array(i)
  }
}
