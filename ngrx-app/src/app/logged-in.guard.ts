import { Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';

export const loggedInGuard: CanActivateFn = (route, state) => {
  const store = Inject(Store);
  const router = Inject(Router);

  const user = store.select(fromAuth.selectUserSession).pipe(
    filter((user)=> user.isloggedIn),
    take(1)
  );


  if(!user) {
    router.navigate['/register'];
  } else {
    return true;
  }
};
