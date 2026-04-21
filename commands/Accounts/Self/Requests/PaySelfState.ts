import { JsonObject, nothing, serialization, SyncName } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";

/**
 * Allows a session {@link User} to change their own state.
 */
export class PaySelfState extends Payload {
	/**
	 * Additional options which do not fit in with the formats or measurements preferences.
	 * If a value of null is given, the option is removed.  To keep the option, you can use a blank string.
	 * For convenience, if the value of an option is given as JSON (instead of a string), they are automatically serialized with no white-space.
	 */
	options: Map<string, string | nothing> | nothing;

	constructor(json?: JsonObject) {
		super(json);
		this.options = json?.options ? new Map(Object.entries(json?.options)) : null;
	}

	override getAction(): {
		kind: "Merge",
		object: SyncName,
		filter: "State",
		batch: false,
	} {
		return {
			kind: "Merge",
			object: "Self" as SyncName,
			filter: "State",
			batch: false,
		};
	}

	override createReply(json: JsonObject): Reply {
		return new Reply(json);
	}

	override toJSON(): JsonObject {
		const json: JsonObject = super.toJSON();
		if (this.options?.size) json.options = serialization.fromMap(this.options);
		return json;
	}
}