import { Injectable } from "@angular/core";
import { DialogueState } from "@core-models/netlify-state.model";
import { launchDialogue } from "@core-store/actions/netlify.actions";
import { getDialogueState } from "@core-store/selectors/netlify.selectors";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class NetlifyFacade {
    constructor(private store$: Store<any>) { }

    getDialogueState$: Observable<DialogueState> = this.store$.select(getDialogueState)

    launchDialogue(dialogueType: string) {
        this.store$.dispatch(launchDialogue({ dialogueType }))
    }
}