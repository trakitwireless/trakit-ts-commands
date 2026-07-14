import {
    datetime,
    email,
    IDeserializable,
    IRequestable,
    ISerializable,
    JsonObject,
    Machine,
    Provider,
    User,
    utility
} from "@trakit/objects";
import { IContent } from "./IContent";

/**
 * A container for the id of the object requested.
 */
export class ContentAudit<TRequestable extends IRequestable & ISerializable & IDeserializable> implements IContent, ISerializable {
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

	constructor(object: TRequestable, json: JsonObject) {
		this.object = object;
		this.updated = utility.date((json?.updated as JsonObject)?.utc as datetime);
		this.by = (json?.updated as JsonObject)?.by as string ?? "";
		this.from = (json?.updated as JsonObject)?.from as string ?? "";
		this.processed = utility.date(json?.processedUtc as string);
	}

	getKey() { return this.object?.getKey(); }
	toJSON(): JsonObject {
		return {
			...this.object?.toJSON() ?? null,
			updated: {
				dts: this.updated?.toISOString() ?? null,
				by: this.by ?? null,
				from: this.from ?? null,
			},
			processedUtc: this.processed?.toISOString() ?? null,
		};
	}
}