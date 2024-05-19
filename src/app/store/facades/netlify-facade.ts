import { Injectable } from "@angular/core";
import { DialogueState } from "@core-models/netlify-state.model";
import { ApplicationToggles } from "@core-models/toggle-config.model";
import { launchDialogue, loadToggleConfig } from "@core-store/actions/netlify.actions";
import { getApplicationToggles, getDialogueState } from "@core-store/selectors/netlify.selectors";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class NetlifyFacade {
    constructor(private store$: Store<any>) { }

    getDialogueState$: Observable<DialogueState> = this.store$.select(getDialogueState)
    getApplicationToggles$: Observable<ApplicationToggles> = this.store$.select(getApplicationToggles)

    launchDialogue(dialogueType: string) {
        this.store$.dispatch(launchDialogue({ dialogueType }))
    }

    loadToggleConfig(applicationToggles: ApplicationToggles) {
        this.store$.dispatch(loadToggleConfig({ applicationToggles }))
    }
}