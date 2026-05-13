import { ReplySyncBatch } from './ReplySyncBatch';
/**
 * Base class for all responses from commands.
 * All command response classes use this as the base.
 */
export declare abstract class ReplySyncBatchDelete extends ReplySyncBatch {
    /**
     * Adds or updates the constructed object to storage (and maybe IndexedDB).
     */
    store(): boolean;
}
//# sourceMappingURL=ReplySyncBatchDelete.d.ts.map