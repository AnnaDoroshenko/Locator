import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public pageContent = {
      header: {
          title: 'About Loc8r',
          strapline: ''
      },
      content: 'Loc8r was created to help people find places to sit down and get a bit of work done.\n\nTry it!'
  }

}
