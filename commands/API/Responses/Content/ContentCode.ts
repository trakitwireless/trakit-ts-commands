import { ISerializable, JsonObject, nothing } from "@trakit/objects";
import { IContent } from "./IContent";

/**
 * A container for the id of the {@link ProviderRegistration} requested/created.
 **/
export class ContentCode implements IContent, ISerializable {
	/**
	 * Creates a {@link ContentCode} from a JSON object.
	 * @param json - JSON object to create the {@link ContentCode} from.
	 * @returns A {@link ContentCode} instance or nothing.
	 */
	static fromJSON(json: JsonObject): ContentCode | nothing {
		return json
			? new ContentCode(json)
			: null;
	}

	/**
	 * Identifier given as input for the command.
	 **/
	code: string;

	constructor(json: JsonObject) {
		this.code = json?.code as string ?? "";
	}

	getKey() { return this.code; }
	toJSON(): JsonObject {
		return {
			code: this.code,
		};
	}
}