import { Company, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentId } from "./ContentId";
import { IContentCompany } from "./IContentCompany";

/**
 * A container for the id and owning {@link Company.id} of the object requested/created.
 **/
export class ContentIdCompany extends ContentId implements IContentCompany {
	/**
	 * Creates a {@link ContentIdCompany} from a JSON object.
	 * @param json - JSON object to create the {@link ContentIdCompany} from.
	 * @returns A {@link ContentIdCompany} instance or nothing.
	 */
	static override fromJSON(json: JsonObject): ContentIdCompany | nothing {
		return json
			? new ContentIdCompany(json)
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
	getCompanyId() { return this.company as ulong; }
	override toJSON() {
		return {
			...super.toJSON(),
			company: this.company ?? null,
		};
	}
}