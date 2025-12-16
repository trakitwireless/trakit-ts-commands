import { ISerializable, JsonObject, nothing } from "@trakit/objects";
import { IContent } from "./IContent";

/**
 * A container for the id of the {@link Provider} requested/created.
 */
export class ContentIdendifier implements IContent, ISerializable {
	/**
	 * Creates a {@link ContentId} from a JSON object.
	 * @param json - JSON object to create the {@link ContentId} from.
	 * @returns A {@link ContentId} instance or nothing.
	 */
	static fromJSON(json: JsonObject): ContentIdendifier | nothing {
		return json
			? new ContentIdendifier(json)
			: null;
	}

	/**
	 * Identifier given as input for the command.
	 */
	id: string | nothing;

	constructor(json: JsonObject) {
		this.id = json?.id as string;
	}
	
	getKey() { return this.id as string; }
	toJSON(): JsonObject {
		return {
			id: this.id ?? null,
		};
	}
}