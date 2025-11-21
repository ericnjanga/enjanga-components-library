import { EnjEventEmitter } from "./EventEmitter.class";
import type { EventType } from "./types";

// Event name constants
export const MODAL_OPEN: EventType  = 'Enj-modal has opened';
export const MODAL_CLOSE: EventType = 'Enj-modal has closed';

// Shared emitter instance for all modal-related events
export const modalEvents = new EnjEventEmitter();