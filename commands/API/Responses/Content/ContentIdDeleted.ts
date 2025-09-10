import { uint } from "@trakit/objects";
import { ContentIdCompany } from "./ContentIdCompany";

/**
 * For delete/restore commands, this contains the id, version keys, owning {@link Company.id}, and deleted state.
 **/
export class ContentIdDeleted extends ContentIdCompany {
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
		this.deleted = json.deleted;
		this.v = json.v;
	}
}