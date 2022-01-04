import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Loc8rDataService } from '../loc8r-data.service';
import { Location } from '../location';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styles: [
  ]
})
export class DetailsPageComponent implements OnInit {

  constructor(
    private loc8rDataService: Loc8rDataService,
    private route: ActivatedRoute
  ) { }

  newLocation!: Location;

  ngOnInit(): void {
    this.route.paramMap
        .pipe(
            switchMap((params: ParamMap) => {
                let id = params.get('locationId')!;
                return this.loc8rDataService.getLocationById(id);
            })
        )
        .subscribe((newLocation: Location) => {
            this.newLocation = newLocation;
            this.pageContent.header.title = newLocation.name;
            this.pageContent.sidebar = `${newLocation.name} is on Loc8r because ih has accessible wifi and space to sit down with your laptop and get some work done.\n\nLeave a review.`
        });
  }

  public pageContent = {
    header: {
        title: '',
        stapline: ''
    },
    sidebar: ''
  };

}
