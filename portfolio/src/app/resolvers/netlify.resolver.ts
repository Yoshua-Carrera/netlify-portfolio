import { ResolveFn } from '@angular/router';

export const netlifyResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
