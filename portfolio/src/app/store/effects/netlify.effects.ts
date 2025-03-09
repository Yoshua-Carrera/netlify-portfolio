import { Injectable } from "@angular/core";
import { launchDialogue } from "@core-store/actions/netlify.actions";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs";

@Injectable()
export class AnilistEffects {
  constructor(
    private actions$: Actions,
  ) { }

  fetchTopTitles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(launchDialogue),
      map(_ => {
        console.log('launchDialogue')
      })
    ),
    {
      dispatch: false
    }
  )
}