import { DialogueState, NetlifyState } from "@core-models/netlify-state.model";
import { ApplicationToggles } from "@core-models/toggle-config.model";
import { NETLIFY_STORE_KEY } from "@core-store/reducers/netlify.reducers";
import { MemoizedSelector, createFeatureSelector, createSelector } from "@ngrx/store";

export const getNetlifyState: MemoizedSelector<NetlifyState, NetlifyState> = createFeatureSelector(NETLIFY_STORE_KEY)

export const getDialogueState: MemoizedSelector<NetlifyState, DialogueState> = createSelector(getNetlifyState,  (state: NetlifyState) => state.dialogueState )

export const getApplicationToggles: MemoizedSelector<NetlifyState, ApplicationToggles> = createSelector(getNetlifyState,  (state: NetlifyState) => state.applicationToggles )