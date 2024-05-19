import { NetlifyState, initialNetlifyState } from "@core-models/netlify-state.model";
import { launchDialogue, loadToggleConfig } from "@core-store/actions/netlify.actions";
import { Action, createReducer, on } from "@ngrx/store";

export const NETLIFY_STORE_KEY = 'netlify';

const reducer = createReducer(
    initialNetlifyState,
    on(launchDialogue, (state, { dialogueType }): NetlifyState => ({
        ...state,
        dialogueState: {
            ...state.dialogueState,
            dialogueType
        }
    })),
    on(loadToggleConfig, (state, { applicationToggles }): NetlifyState => ({
        ...state,
        applicationToggles
    }))
)

export const netlifyReducer = (state: NetlifyState, action: Action) => reducer(state, action)