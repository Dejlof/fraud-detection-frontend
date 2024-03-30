import { Component, Inject, inject } from '@angular/core';
import { CanActivateFn, Router, RouterOutlet } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedIn = sessionStorage.getItem('token') != null;
  if(isLoggedIn){
    console.log("access granted");
    return true;
  }
  else {
    router.navigate(['/login']);
    console.log("access denied");
    return false;
  }
  // debugger;
  // return true;
  
};

// export class RoutingService{
//   static navigateToLogin() {
//     throw new Error('Method not implemented.');
//   }
//   constructor(private router:Router) {

//   }

//   navigateToLogin(){
//     this.router.navigate(['/login']);
//   }
// }
