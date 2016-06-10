import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx';

export enum Role {
  User,
  Admin
}

@Injectable()
export class AuthService {

  public role: Subject<Role>;

  constructor() {
    this.role = new Subject<Role>();
  }

  updateRole(r: Role) {
    this.role.next(r);
  }
}
