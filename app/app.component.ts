import { Component } from '@angular/core';
import { Auth }      from "./service/auth.service";
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(private auth: Auth) {}
}
