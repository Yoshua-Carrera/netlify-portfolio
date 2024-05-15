export interface NetlifyState {
    dialogueState: DialogueState
}

export interface DialogueState {
    dialogueType: string
}

export const initialNetlifyState: NetlifyState = {
    dialogueState: null
}