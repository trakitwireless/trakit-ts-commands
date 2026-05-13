import { codified, email, guid, ulong } from '@trakit/objects';
import { ReplySync } from './ReplySync';
/**
 * Base class for all responses from commands.
 * All command response classes use this as the base.
 */
export declare abstract class ReplySyncDelete extends ReplySync {
    /**
     * Returns the constructed object.
     */
    abstract getKey(): string | guid | email | codified | ulong;
    /**
     * Adds or updates the constructed object to storage (and maybe IndexedDB).
     */
    store(): boolean;
}
//# sourceMappingURL=ReplySyncDelete.d.ts.map