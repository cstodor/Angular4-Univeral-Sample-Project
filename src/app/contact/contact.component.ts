import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    meta: Meta,
    title: Title
  ) {
    title.setTitle('Contact Us');
    meta.addTags([
      { name: 'author', content: 'Csaba Todor' },
      { name: 'keywords', content: 'contact, angular, angular universal, node.js, express.js, typescript, javascript' },
      { name: 'description', content: 'Contact Page for Angular 4 Sample Project Using Angular Universal' }
    ]);
  }

  ngOnInit() {
  }

}
