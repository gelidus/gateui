import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export enum Role {
  Visitor,
  Partner,
  BusinessDeveloper
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
