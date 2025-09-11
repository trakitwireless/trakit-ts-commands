import { nothing, uint } from "@trakit/objects";
import { ContentKeyCompany } from "./ContentKeyCompany";

/**
 * For delete/restore commands, this contains the {@link Machine.key}, version keys, owning {@link Company.id}, and deleted state.
 **/
export class ContentKeyDeleted extends ContentKeyCompany {
	/**
	 * Creates a {@link ContentKeyDeleted} from a JSON object.
	 * @param json - JSON object to create the {@link ContentKeyDeleted} from.
	 * @returns A {@link ContentKeyDeleted} instance or nothing.
	 */
	static override fromJSON(json: any): ContentKeyDeleted | nothing {
		return json
			? new ContentKeyDeleted(json)
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