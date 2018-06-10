import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from '../shared/data.service';

import { IMovie } from '../movies/movie.model';
import { NavbarService } from '../shared/navbar.service';

@Component({
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies;
  tenMovies: any[];

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router,
              private nav: NavbarService) {
  }

  clicked() {
    this.nav.hide();
  }

  ngOnInit() {
    this.nav.show();
    this.movies = this.route.snapshot.data['movies']; // used for getting data through resolve service
    this.tenMovies = this.movies.results;
    this.tenMovies = this.tenMovies.slice(0, 10);
  }
}
