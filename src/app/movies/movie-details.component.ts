import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  templateUrl: './movie-details.component.html'
})

export class MovieDetailsComponent implements OnInit {
  movie;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router) { }

  onBack() {
    this.router.navigate(['/movies']);
  }

  ngOnInit() {
    // showing specific movie
    this.route.data.forEach((data) => {
        this.movie = data['movie'];
    });
  }
}
