import { Component } from '@angular/core';
import { faAlignRight, faSearch, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  faAlignRight = faAlignRight;
  faSearch = faSearch;
  faCheck = faCheck;
}
