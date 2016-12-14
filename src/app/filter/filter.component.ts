import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() entity = ''
  @Input() terms = ''
  @Input() filter = {}

  nameFilterCollapsed = false

  name = ''
  priceMin = 700
  priceMax = 5000
  starsAll = false
  stars5 = false
  stars4 = false
  stars3 = false
  stars2 = false
  stars1 = false

  constructor(private router: Router) { }

  ngOnInit() {

  }

  applyFilter () {
    console.log('-- apply filter', this.filter)

    // navigate to search route
    const url = `search/${this.entity}/${this.terms}`
    this.router.navigate([url], {
      queryParams: this.filter
    })
  }

  filterByNameOnKey (keyCode) {
    if (keyCode === 13) this.applyFilter()
  }

  allStarsChanged () {
    // disable individual star selectors
    if (this.starsAll) {
      this.stars5 = false
      this.stars4 = false
      this.stars3 = false
      this.stars2 = false
      this.stars1 = false

      this.filter['stars'] = '5,4,3,2,1'
    }

    this.filter['stars'] = null

    this.applyFilter()
  }

  starsChanged () {
    // ensure all stars selector is disabled
    this.starsAll = false

    let selectedStars = []
    for (let i=1; i<=5;++i) {
      if (this[`stars${i}`]) selectedStars.push(i)
    }
    this.filter['stars'] = selectedStars.join(',')
    this.applyFilter()
  }
}
