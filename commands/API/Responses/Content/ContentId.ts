import { ISerializable, JsonObject, nothing, ulong } from "@trakit/objects";
import { IContent } from "./IContent";

/**
 * A container for the id of the object requested.
 **/
export class ContentId implements IContent, ISerializable {
	/**
	 * Creates a {@link ContentId} from a JSON object.
	 * @param json - JSON object to create the {@link ContentId} from.
	 * @returns A {@link ContentId} instance or nothing.
	 */
	static fromJSON(json: JsonObject): ContentId | nothing {
		return json
			? new ContentId(json)
			: null;
	}

	/**
	 * Identifier given as input for the command.
	 **/
	id: ulong | nothing;

	constructor(json: JsonObject) {
		this.id = json?.id as ulong;
	}

	getKey() { return this.id as ulong; }
	toJSON(): JsonObject {
		return {
			id: this.id ?? null,
		};
	}
}