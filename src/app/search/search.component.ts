import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Observable } from 'rxjs/Observable'
import { SearchService } from './search.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ SearchService ]
})
export class SearchComponent implements OnInit {
  entity = 'hotel'
  terms = ''
  filter = {}
  results = []
  error = ''
  searching = false
  initialized = false
  routerEventSubscription = null

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    // wait until navigation ends to fire search
    // both params and query params need to be set
    this.routerEventSubscription = this.router.events.subscribe((event) => {
      if (event.constructor.name === 'NavigationEnd') {
        if (this.terms && !this.searching) {
          this.initialized = true
          this.search()
        }
      }
    })

    // params
    this.route.params.subscribe(params => {
      this.entity = params['entity'] || this.entity
      this.terms = params['terms']
      // console.log('-- params', params)
    })

    // query params
    this.route.queryParams.subscribe(queryParams => {
      // console.log('-- queryParams', queryParams)

      this.filter = {
        name: queryParams['name'] || null,
        stars: queryParams['stars'] || null,
        priceMin: queryParams['priceMin'] || null,
        priceMax: queryParams['priceMax'] || null
      }
    })
  }

  ngOnDestroy() {
    // needed to avoid multiple subscriptions
    this.routerEventSubscription.unsubscribe()
  }

  searchOnKey (keyCode) {
    if (keyCode !== 13) return

    // navigate to search route
    const url = `search/${this.entity}/${this.terms}`
    this.router.navigate([url])
  }

  search () {
    this.searching = true
    this.searchService
      .search(this.terms, 'hotel', this.filter)
      .subscribe(
        (result) => {
          this.results = result.hotels
          this.searching = false
          console.log(this.results)
        },
        (error) => { this.error = error }
      )
  }
}
