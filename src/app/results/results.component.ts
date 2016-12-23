import { Component, OnInit, Input } from '@angular/core'
import { ServiceIconMap } from './results-service-icon-map'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  providers: [ ServiceIconMap ]
})
export class ResultsComponent implements OnInit {
  @Input() entity = ''
  @Input() terms = ''
  @Input() filter = {}
  @Input() results = []
  @Input() searching = true

  constructor(
    private serviceIconMap: ServiceIconMap
  ) { }

  ngOnInit() {

  }

  getServiceIconClass (serviceId) {
    return this.serviceIconMap.get(serviceId)
  }
}
