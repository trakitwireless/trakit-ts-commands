import { nothing, uint, ulong } from "@trakit/objects";
import { ContentId } from "./ContentId";

/**
 * For delete/restore commands, this contains the id, owning {@link Company.parent}, and deleted state.
 **/
export class ContentParentDeleted extends ContentId {
	/**
	 * Creates a {@link ContentParentDeleted} from a JSON object.
	 * @param json - JSON object to create the {@link ContentParentDeleted} from.
	 * @returns A {@link ContentParentDeleted} instance or nothing.
	 */
	static override fromJSON(json: any): ContentParentDeleted | nothing {
		return json
			? new ContentParentDeleted(json)
			: null;
	}

	/**
	 * Identifier of the {@link Company|parent} to which the {@link Company} is a child.
	 **/
	parent: ulong;
	/**
	 * Flag showing if the object is deleted.
	 **/
	deleted: boolean;
	/**
	 * Object version keys used to validate synchronization for all object properties.
	 **/
	v: uint[];

	constructor(json: any) {
		super(json);
		this.parent = json?.parent;
		this.deleted = !!(json?.deleted);
		this.v = json?.v ?? [];
	}
}