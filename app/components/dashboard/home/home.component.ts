import { Component } from '@angular/core';
import { Auth }      from "../../../service/auth.service";
@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent {
    constructor(private auth: Auth) {}
}
