import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NativeReferencesService } from '../services/native-references.service';
import { Auth } from '../services/auth.service';

@Component({
  selector:'user-auth',
  templateUrl:'vacation-chooser/templates/user-auth.component.html'
})

export class UserAuthComponent {
  constructor(private auth: Auth) {}
}
