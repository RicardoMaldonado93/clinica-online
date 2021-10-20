import { transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterAnimationsLib } from '@core/utils/router-animations';
import { nextForm } from '@features/utils/forms-animations';
@Component({
  selector: 'cl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
      RouterAnimationsLib.fadeIn
  ],
})
export class AppComponent {
  title = 'clinicaOnline';

  public animateRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
