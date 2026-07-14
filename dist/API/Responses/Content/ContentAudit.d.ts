import { email, IDeserializable, IRequestable, ISerializable, JsonObject } from "@trakit/objects";
import { IContent } from "./IContent";
/**
 * A container for the id of the object requested.
 */
export declare class ContentAudit<TRequestable extends IRequestable & ISerializable & IDeserializable> implements IContent, ISerializable {
    /**
     * The object that was updated.
     * This is a snapshot of its state at the time of the event, and may not reflect its current state.
     */
    object: TRequestable;
    /**
     * Timestamp of the event that updated the object.
     * This is almost always earlier than the {@link processed} timestamp, but sometimes identical, and never later.
     */
    updated: Date;
    /**
     * The {@link Provider.id}, {@link User.login}, {@link Machine.key}, or possibly the UserAgent of the service that triggered the event.
     */
    by: email | string;
    /**
     * UserAgent of the service that processed the event.
     */
    from: string;
    /**
     * Timestamp from when the Trak-iT service processed the event.
     * This is almost always later than the {@link updated} timestamp, but sometimes identical, and never earlier.
     */
    processed: Date;
    constructor(object: TRequestable, json: JsonObject);
    getKey(): string | number;
    toJSON(): JsonObject;
}
//# sourceMappingURL=ContentAudit.d.ts.map