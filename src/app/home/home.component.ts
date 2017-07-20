import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    meta: Meta,
    title: Title
  ) {
    title.setTitle('Angular Universal Example Project');
    meta.addTags([
      { name: 'author', content: 'Csaba Todor' },
      { name: 'keywords', content: 'angular, angular universal, node.js, express.js, typescript, javascript' },
      { name: 'description', content: 'Angular 4 Sample Project Using Angular Universal' }
    ]);
  }

  ngOnInit() {
  }

}
