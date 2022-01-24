import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class MonGuardGuard implements CanActivate {
  constructor(private monServ: AuthServiceService) {}
  canActivate(): boolean {
    return this.monServ.estCo;
  }
}
