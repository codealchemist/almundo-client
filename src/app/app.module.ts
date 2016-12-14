// angular modules
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

// third party modules
import { MaterialModule } from '@angular/material'
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap'
import 'hammerjs'

// app modules
import { routing } from './app.routing'
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { MenuComponent } from './menu/menu.component'
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component'
import { ResultsComponent } from './results/results.component'
import { MinimapComponent } from './minimap/minimap.component'
import { FilterComponent } from './filter/filter.component'
import { SearchComponent } from './search/search.component';
import { StarsComponent } from './stars/stars.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    BreadcrumbsComponent,
    ResultsComponent,
    MinimapComponent,
    FilterComponent,
    SearchComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    routing,
    AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
