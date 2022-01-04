import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styles: [
  ]
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public pageContent = {
      header : {
          title: 'Loc8r',
          strapline: 'Find places to work with wifi near you!'
      },
      sidebar : 'Loc8r helps you to find places to work when out and about.'
  };

}
