import { Component, OnInit } from '@angular/core';
import { faDisplay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  constructor() { }
  faDisplay=faDisplay;
  faComputer=faDisplay;
  ngOnInit(): void {
  }

}
