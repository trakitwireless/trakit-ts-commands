import { BaseComponent, BaseCompound, IRequestable, JsonObject, SyncName } from '@trakit/objects';
import { ReplySync } from './ReplySync';
/**
 * Base class for all responses from commands.
 * All command response classes use this as the base.
 */
export declare abstract class ReplySyncGet<TRequestable extends IRequestable> extends ReplySync {
    /**
     * Returns the constructed object.
     */
    abstract getObject(): TRequestable;
    /**
     * Adds or updates the constructed object to storage (and maybe IndexedDB).
     */
    store(): boolean;
}
/**
 * Base class for all responses from commands that deal with compound objects.
 */
export declare abstract class ReplySyncGetPiece<TRequestable extends BaseComponent> extends ReplySyncGet<TRequestable> {
    /**
     * Returns the index of the piece in the {@link BaseCompound} to sync.
     */
    readonly _pieceIndex: number;
    constructor(json: JsonObject, type: SyncName, index: number);
    /**
     * Creates a blank instance of the compound object.
     */
    protected abstract _createBlank(): BaseCompound;
    /**
     * Adds or updates the constructed object to storage (and maybe IndexedDB).
     */
    store(): boolean;
}
//# sourceMappingURL=ReplySyncGet.d.ts.map