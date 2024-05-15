import { NetlifyState, initialNetlifyState } from "@core-models/netlify-state.model";
import { launchDialogue } from "@core-store/actions/netlify.actions";
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
    }))
)

export const netlifyReducer = (state: NetlifyState, action: Action) => reducer(state, action)