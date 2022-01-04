import { Component, OnInit, Input } from '@angular/core';
import { Location, Review } from '../location';
import { Loc8rDataService } from '../loc8r-data.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styles: [
  ]
})
export class LocationDetailsComponent implements OnInit {

  @Input() location!: Location;

  public googleAPIKey: string = 'AIzaSyBapeDIPgEPO6VeSzLVboIQwuwx-FKkgLc';

  public newReview: Review = {
      author: '',
      rating: 5,
      reviewText: '',
      createdOn: ''
  };

  public formVisible: boolean = false;

  public formError!: string;

  private formIsValid(): boolean {
      if (this.newReview.author && this.newReview.rating && this.newReview.reviewText) {
          return true;
      } else {
          return false;
      }
  }

  private resetAndHideReviewForm(): void {
      this.formVisible = false;
      this.newReview.author = '';
      this.newReview.rating = 5;
      this.newReview.reviewText = '';
  }

  public onReviewSubmit(): void {
      this.formError = '';
      if (this.formIsValid()) {
          console.log(this.newReview);
          this.loc8rDataService.addReviewByLocationId(this.location._id, this.newReview)
            .then((review: Review) => {
                console.log('Review saved', review);
                let reviews = this.location.reviews.slice(0);
                reviews.unshift(review);
                this.location.reviews = reviews;
                this.resetAndHideReviewForm();
            });
      } else {
          this.formError = 'All fields reqiured, please try again';
      }
  }

  constructor(private loc8rDataService: Loc8rDataService) { }

  ngOnInit(): void {
  }

}
