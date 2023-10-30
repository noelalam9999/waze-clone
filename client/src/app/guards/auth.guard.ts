//auth.guard.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(): boolean {
    if (this.authService.currentUserValue) {
      // if authenticated, redirect to dashboard
      return true;
    } else {

      // if not authenticated, redirect to login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}