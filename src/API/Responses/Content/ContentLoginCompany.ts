import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentLogin } from "./ContentLogin";
import { IContentCompany } from "./IContentCompany";

/**
 * A container for the {@link User} login and owning {@link Company.id} of the user requested/created.
 */
export class ContentLoginCompany extends ContentLogin implements IContentCompany {
	/**
	 * Creates a {@link ContentLoginCompany} from a JSON object.
	 * @param json - JSON object to create the {@link ContentLoginCompany} from.
	 * @returns A {@link ContentLoginCompany} instance or nothing.
	 */
	static override fromJSON(json: JsonObject): ContentLoginCompany | nothing {
		return json
			? new ContentLoginCompany(json)
			: null;
	}

	/**
	 * Identifier of the {@link Company} to which the {@link User} belongs.
	 */
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