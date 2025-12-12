import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentKey } from "./ContentKey";
import { IContentCompany } from "./IContentCompany";

/**
 * A container for the {@link Machine.key} and owning {@link Company.id} of the {@link Machine} requested/created.
 **/
export class ContentKeyCompany extends ContentKey implements IContentCompany {
	/**
	 * Creates a {@link ContentKeyCompany} from a JSON object.
	 * @param json - JSON object to create the {@link ContentKeyCompany} from.
	 * @returns A {@link ContentKeyCompany} instance or nothing.
	 */
	static override fromJSON(json: JsonObject): ContentKeyCompany | nothing {
		return json
			? new ContentKeyCompany(json)
			: null;
	}

	/**
	 * Identifier of the {@link Company} to which the {@link Machine} belongs.
	 **/
	company: ulong | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = json?.company as ulong;
	}

	getCompanyId() { return this.company as ulong; }
	override toJSON() {
		return {
			...super.toJSON(),
			company: this.company ?? null,
		};
	}
}