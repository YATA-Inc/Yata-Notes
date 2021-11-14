import { Component, OnInit } from '@angular/core';
import { faAlignRight, faSearch, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'app';
  faAlignRight = faAlignRight;
  faSearch = faSearch;
  faCheck = faCheck;

  public notes = [
    { title: "Title of the note", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", category: "blue" },
    { title: "Title of the note", desc: "This would also be great. \n But I'd still like to figure it out.", category: "blue" },
    { title: "Title of the note", desc: "Can you please buy milk?", category: "red" },
    { title: "Title of the note", desc: "And bread?", category: "blue" }
  ];

  public todos = [
    { desc: "First todo to do", category: "blue", status: "open" },
    { desc: "This would also be great", category: "blue", status: "done" },
    { desc: "Can you please buy milk?", category: "red", status: "open" },
    { desc: "And bread?", category: "blue", status: "open" },
    { desc: "What about eggs?", category: "yellow", status: "open" },
    { desc: "Oh I like ham", category: "blue", status: "open" }
  ];
  
  constructor(){}

  ngOnInit(): void {

  }

}