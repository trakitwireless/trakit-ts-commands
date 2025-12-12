import { JsonObject, nothing, Provider, uint } from "@trakit/objects";
import { ContentIdendifierCompany } from "./ContentIdendifierCompany";

/**
 * For delete/restore commands, this contains the {@link Provider.id}, version keys, owning {@link Company.id}, and deleted state.
 **/
export class ContentIdendifierDeleted extends ContentIdendifierCompany {
	/**
	 * Creates a {@link ContentIdendifierDeleted} from a JSON object.
	 * @param json - JSON object to create the {@link ContentIdendifierDeleted} from.
	 * @returns A {@link ContentIdendifierDeleted} instance or nothing.
	 */
	static override fromJSON(json: JsonObject): ContentIdendifierDeleted | nothing {
		return json
			? new ContentIdendifierDeleted(json)
			: null;
	}

	/**
	 * Flag showing if the object is deleted.
	 **/
	deleted: boolean;
	/**
	 * Object version keys used to validate synchronization for all object properties.
	 **/
	v: uint[];

	constructor(json: JsonObject) {
		super(json);
		this.deleted = !!(json?.deleted);
		this.v = json?.v as uint[] ?? [];
	}

	override toJSON() {
		return {
			...super.toJSON(),
			deleted: !!this.deleted,
			v: [...this.v],
		};
	}
}