import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string = 'Devesh Raut';

  constructor() { }

  ngOnInit(): void {
  }

  companyName:string ="Food Delivery "  ;
}
