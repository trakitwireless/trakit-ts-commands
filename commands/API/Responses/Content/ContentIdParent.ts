import { ISerializable, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentId } from "./ContentId";
import { IContentCompany } from "./IContentCompany";

/**
 * A container for the id and the requested/created {@link Company.parent}.
 **/
export class ContentIdParent extends ContentId implements IContentCompany, ISerializable {
	/**
	 * Creates a {@link ContentIdParent} from a JSON object.
	 * @param json - JSON object to create the {@link ContentIdParent} from.
	 * @returns A {@link ContentIdParent} instance or nothing.
	 */
	static override fromJSON(json: JsonObject): ContentIdParent | nothing {
		return json
			? new ContentIdParent(json)
			: null;
	}

	/**
	 * Identifier of the parent to which this company belongs
	 **/
	parent: ulong | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.parent = json?.parent as ulong;
	}
	getCompanyId() { return this.parent as ulong; }
	override toJSON() {
		return {
			...super.toJSON(),
			parent: this.parent ?? null,
		};
	}
}