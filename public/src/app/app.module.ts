import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { ChicagoComponent } from './chicago/chicago.component';

import { WeatherService } from './weather.service';

// tslint:disable-next-line: max-line-length
// / To add routing we first create the new components we want (use ng g c component_name). Then we place the Angular specific HTML tag <router-outlet></router-outlet> within our template. Within this tag, the appropriate new component will load based on the Angular route.
// tslint:disable-next-line: max-line-length
// Notice that, unlike when we generate a service, when we generate a component, our component is automatically registered with our application! Look at app namespace ts to see how it was changed.

@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    SanjoseComponent,
    BurbankComponent,
    DallasComponent,
    DcComponent,
    ChicagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
