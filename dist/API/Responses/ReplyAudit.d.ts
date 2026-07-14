import { IDeserializable, IRequestable, ISerializable, JsonObject, nothing, ulong } from '@trakit/objects';
import { ContentAudit } from './Content/ContentAudit';
import { Reply } from './Reply';
/**
 * Base class for all responses from commands.
 * All command response classes use this as the base.
 */
export declare abstract class ReplyAudit<TRequestable extends IRequestable & ISerializable & IDeserializable> extends Reply {
    /**
     * The date to start the list from.
     */
    after: Date | nothing;
    /**
     * The date to end the list at.
     */
    before: Date | nothing;
    /**
     * The lowest version key for the requested object.
     */
    lowest: ulong | nothing;
    /**
     * The highest version key for the requested object.
     */
    highest: ulong | nothing;
    constructor(json: JsonObject);
    /**
     * Returns the collection of audit details for the requested object.
     */
    abstract getHistory(): ContentAudit<TRequestable>[];
    /**
     * Returns the constructed collection of objects.
     */
    getObjects(): TRequestable[];
}
//# sourceMappingURL=ReplyAudit.d.ts.map