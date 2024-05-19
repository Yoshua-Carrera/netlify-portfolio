import { DialogueState, NetlifyState } from "@core-models/netlify-state.model";
import { NETLIFY_STORE_KEY } from "@core-store/reducers/netlify.reducers";
import { MemoizedSelector, createFeatureSelector, createSelector } from "@ngrx/store";
import { Observable } from "rxjs";

export const getNetlifyState: MemoizedSelector<NetlifyState, NetlifyState> = createFeatureSelector(NETLIFY_STORE_KEY)

export const getDialogueState: MemoizedSelector<NetlifyState, DialogueState> = createSelector(getNetlifyState,  (state: NetlifyState) => state.dialogueState )