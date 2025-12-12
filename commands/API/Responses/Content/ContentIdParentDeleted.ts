import { JsonObject, nothing, uint, ulong } from "@trakit/objects";
import { ContentIdParent } from "./ContentIdParent";

/**
 * For delete/restore commands, this contains the id, owning {@link Company.parent}, and deleted state.
 **/
export class ContentIdParentDeleted extends ContentIdParent {
	/**
	 * Creates a {@link ContentIdParentDeleted} from a JSON object.
	 * @param json - JSON object to create the {@link ContentIdParentDeleted} from.
	 * @returns A {@link ContentIdParentDeleted} instance or nothing.
	 */
	static override fromJSON(json: JsonObject): ContentIdParentDeleted | nothing {
		return json
			? new ContentIdParentDeleted(json)
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
		this.parent = json?.parent as ulong;
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