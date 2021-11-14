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

  public todos = [
    { desc: "First todo to do", status: "open" },
    { desc: "This would also be great", status: "done" },
    { desc: "Can you please buy milk?", status: "open" },
    { desc: "And bread?", status: "open" },
    { desc: "What about eggs?", status: "open" },
    { desc: "Oh I like ham", status: "open" }
  ];

  public isDone = false;

  public checkDone() {
     // reverse the value of property
     this.isDone = !this.isDone;
  }
  
  constructor(){}

  ngOnInit(): void {

  }

}