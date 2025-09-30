import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentCode } from "./ContentCode";

/**
 * A container for the id and owning {@link Company} of the {@link ProviderRegistration} requested/created.
 **/
export class ContentCodeCompany extends ContentCode {
	/**
	 * Creates a {@link ContentCodeCompany} from a JSON object.
	 * @param json - JSON object to create the {@link ContentCodeCompany} from.
	 * @returns A {@link ContentCodeCompany} instance or nothing.
	 */
	static override fromJSON(json: JsonObject): ContentCodeCompany | nothing {
		return json
			? new ContentCodeCompany(json)
			: null;
	}

	/**
	 * Identifier of the {@link Company} to which this object belongs.
	 **/
	company: ulong | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = json?.company as ulong;
	}
}