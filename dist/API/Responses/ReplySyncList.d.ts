import { BaseComponent, BaseCompound, codified, email, guid, IDeserializable, IRequestable, ISerializable, JsonObject, SyncName, ulong } from '@trakit/objects';
import { ReplySync } from './ReplySync';
/**
 * Base class for all responses from commands.
 * All command response classes use this as the base.
 */
export declare abstract class ReplySyncList<TRequestable extends IRequestable & ISerializable & IDeserializable> extends ReplySync {
    /**
     * Returns the constructed collection of objects.
     */
    abstract getList(): TRequestable[];
    /**
     * Filters the existing stored collection to determine which objects are a part of this synchronization operation.
     * For listing commands, this will filter out only those objects that match the company or asset to which these objects belong.
     * @param pair
     * @param index
     */
    abstract _filterCollection(pair: [ulong | guid | email | codified | string, TRequestable], index: number): boolean;
    /**
     * Returns the key for the given pair.
     */
    _keyCollection(pair: [ulong | guid | email | codified | string, TRequestable], index: number): string | number;
    /**
     * Adds or updates the constructed objects to storage (and maybe IndexedDB).
     * @param map
     * @param key
     * @param obj
     */
    _store(map: Map<ulong | guid | email | codified | string, TRequestable>, obj: TRequestable): [boolean, ulong | guid | email | codified | string];
    /**
     * Adds or updates the constructed objects to storage (and maybe IndexedDB).
     */
    store(): boolean;
}
/**
 * Base class for all responses from commands that deal with compound objects.
 */
export declare abstract class ReplySyncListPiece<TRequestable extends BaseComponent> extends ReplySyncList<TRequestable> {
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
     * This override synchronizes only the piece of the compound object, and creates a blank object if it does not exist.
     */
    _store(map: Map<ulong | guid | email | codified | string, TRequestable>, obj: TRequestable): [boolean, ulong | guid | email | codified | string];
}
//# sourceMappingURL=ReplySyncList.d.ts.map