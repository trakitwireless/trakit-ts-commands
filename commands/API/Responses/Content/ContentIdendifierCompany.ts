import { JsonObject } from "@trakit/objects";
import { nothing, ulong } from "@trakit/objects";
import { ContentIdendifier } from "./ContentIdendifier";

/**
 * A container for the id and owning {@link Company} of the {@link Provider} requested/created.
 **/
export class ContentIdendifierCompany extends ContentIdendifier {
	/**
	 * Creates a {@link ContentIdendifierCompany} from a JSON object.
	 * @param json - JSON object to create the {@link ContentIdendifierCompany} from.
	 * @returns A {@link ContentIdendifierCompany} instance or nothing.
	 */
	static override fromJSON(json: JsonObject): ContentIdendifierCompany | nothing {
		return json
			? new ContentIdendifierCompany(json)
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