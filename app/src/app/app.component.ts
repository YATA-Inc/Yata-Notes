import { Component } from '@angular/core';
import { faAlignRight, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  faAlignRight = faAlignRight;
  faSearch = faSearch;
}
