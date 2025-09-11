import { nothing, uint } from "@trakit/objects";
import { ContentLoginCompany } from "./ContentLoginCompany";

/**
 * For delete/restore commands, this contains the {@link User} login, version keys, owning {@link Company.id}, and deleted state.
 **/
export class ContentLoginDeleted extends ContentLoginCompany {
	/**
	 * Creates a {@link ContentLoginDeleted} from a JSON object.
	 * @param json - JSON object to create the {@link ContentLoginDeleted} from.
	 * @returns A {@link ContentLoginDeleted} instance or nothing.
	 */
	static override fromJSON(json: any): ContentLoginDeleted | nothing {
		return json
			? new ContentLoginDeleted(json)
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

	constructor(json: any) {
		super(json);
		this.deleted = !!(json?.deleted);
		this.v = json?.v ?? [];
	}
}