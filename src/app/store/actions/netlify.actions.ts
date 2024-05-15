import { createAction, props } from "@ngrx/store";

export const launchDialogue = createAction(
    '[netlify dialogue] - Launch dialogue',
    props<{ dialogueType: string }>()
)