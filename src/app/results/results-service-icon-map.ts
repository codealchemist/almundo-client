'user strict'

import { Injectable } from '@angular/core'

@Injectable()
export class ServiceIconMap {
  map = {
    "swimming-pool": "icon amt-beach-pool-facilities",
    "business-center": "icon amt-business-center",
    "checkin-24": "icon amt-check-in",
    "cleaning": "icon amt-housekeeping",
    "internet": "icon amt-internet",
    "tv": "icon amt-television",
    "bar": "icon amt-bar",
    "coffee-shop": "icon amt-coffee-shop",
    "gym": "icon amt-fitness-center"
  }

  get (serviceId) {
    return this.map[serviceId]
  }
}
