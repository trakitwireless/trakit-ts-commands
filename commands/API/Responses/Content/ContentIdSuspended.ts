import { uint } from "@trakit/objects";
import { ContentIdCompany } from "./ContentIdCompany";

/**
 * For suspend/revive commands, this contains the id, version keys, owning {@link Company.id}, and suspended state.
 **/
export class ContentIdSuspended extends ContentIdCompany {
	/**
	 * Flag showing if the object is suspended.
	 **/
	suspended: boolean;
	/**
	 * Object version keys used to validate synchronization for all object properties.
	 **/
	v: uint[];

	constructor(json: any) {
		super(json);
		this.suspended = !!(json?.suspended);
		this.v = json?.v ?? [];
	}
}