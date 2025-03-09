import { ApplicationToggles } from "@core-models/toggle-config.model";
import { createAction, props } from "@ngrx/store";

export const launchDialogue = createAction(
    '[netlify dialogue] - Launch dialogue',
    props<{ dialogueType: string }>()
)

export const loadToggleConfig = createAction(
    '[netlify toggles] - Load Application Toggles',
    props<{ applicationToggles: ApplicationToggles }>()
)