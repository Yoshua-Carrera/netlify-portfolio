import { ApplicationToggles } from "./toggle-config.model"

export interface NetlifyState {
    dialogueState: DialogueState;
    applicationToggles: ApplicationToggles;

}

export interface DialogueState {
    dialogueType: string;
}

export const initialNetlifyState: NetlifyState = {
    dialogueState: null,
    applicationToggles: null
}