type InputBlur = FocusEvent & { currentTarget: EventTarget & HTMLInputElement; };
type InputKeydown = KeyboardEvent & { currentTarget: EventTarget & HTMLInputElement; };
type InputEvent = Event & { currentTarget: EventTarget & HTMLInputElement; };