import { Injectable } from '@angular/core'
import { Http, Response, URLSearchParams } from '@angular/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class SearchService {

  constructor(private http: Http) { }

  search (terms, entity, filter) {
    entity = entity || 'hotel'
    let url = `//localhost:3080/${entity}/search?terms=${terms}`

    // console.log('-- search filter', filter)
    if (filter.name) url += `&name=${filter.name}`
    if (filter.stars) url += `&stars=${filter.stars}`
    if (filter.priceMin) url += `&priceMin=${filter.priceMin}`
    if (filter.priceMax) url += `&priceMax=${filter.priceMax}`

    return this.http
      .get(url)
      .map(res => res.json())
  }
}
