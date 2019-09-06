import { Component, OnInit } from '@angular/core';
import sampleData from '../assets/cakeData.json';
import * as writeFile from 'write-file';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'cake-is-a-lie';
  data = null;

  constructor() {
  }

  ngOnInit() {
    console.log(sampleData);
    writeFile('/assets/cakeData.json', { foo: 'bar' }, (err) => {
      // if not `err`, file is written
    });
    console.log(sampleData);
  }

}
