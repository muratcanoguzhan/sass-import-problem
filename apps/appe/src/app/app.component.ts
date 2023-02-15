import { Component, OnInit } from '@angular/core';
import sassVariablesExport from '../_export.scss';

@Component({
  selector: 'qwe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'appe';

  ngOnInit(): void {
    let qweee = sassVariablesExport;
  }
}
