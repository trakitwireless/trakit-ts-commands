import { ReplySyncBatch } from './ReplySyncBatch';
/**
 * Base class for all responses from commands.
 * All command response classes use this as the base.
 */
export declare abstract class ReplySyncBatchSuspend extends ReplySyncBatch {
    /**
     * Adds or updates the constructed object to storage (and maybe IndexedDB).
     */
    store(): boolean;
}
//# sourceMappingURL=ReplySyncBatchSuspend.d.ts.map