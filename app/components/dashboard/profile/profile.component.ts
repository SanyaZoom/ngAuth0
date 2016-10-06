import { Component } from '@angular/core';
import { Auth }      from "../../../service/auth.service";
@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent {
    profile: any;
    constructor(private auth: Auth) {
        this.profile = JSON.parse(localStorage.getItem('profile'));
    }
}
