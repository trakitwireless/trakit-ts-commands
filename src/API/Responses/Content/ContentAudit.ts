import {
    email,
    IDeserializable,
    IRequestable,
    ISerializable,
    JsonObject,
    Machine,
    nothing,
    User,
    utility
} from "@trakit/objects";
import { IContent } from "./IContent";

/**
 * A container for the id of the object requested.
 */
export class ContentAudit<TRequestable extends IRequestable & ISerializable & IDeserializable> implements IContent, ISerializable {
	/**
	 * Timestamp of the event that updated the object.
	 */
	updated: Date | nothing;
	/**
	 * The {@link User.login} or {@link Machine.key} (or possibly the UserAgent of the service) that triggered the event.
	 */
	by: email | string | nothing;
	/**
	 * UserAgent of the service that processed the event.
	 */
	from: string | nothing;
	/**
	 * Timestamp from when the service processed the event.
	 */
	processed: Date | nothing;
	/**
	 * The object that was updated.
	 * This is a snapshot of its state at the time of the event, and may not reflect its current state.
	 */
	object!: TRequestable;

	constructor(json: JsonObject, factory: (json: JsonObject) => TRequestable) {
		if (json) {
			if (json?.updated) {
				this.updated = utility.date((json.updated as JsonObject).utc as string);
				this.by = (json.updated as JsonObject).by as string;
				this.from = (json.updated as JsonObject).from as string;
			}
			this.processed = utility.date(json.processedUtc as string);
			this.object = factory(json.object as JsonObject);
		}
	}

	getKey() { return this.object?.getKey(); }
	toJSON(): JsonObject {
		return {
			...this.object?.toJSON() ?? null,
			updated: this.updated?.toISOString() ?? null,
			by: this.by ?? null,
			from: this.from ?? null,
			processedUtc: this.processed?.toISOString() ?? null,
		};
	}
}