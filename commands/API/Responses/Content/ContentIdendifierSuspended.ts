import { nothing, uint } from "@trakit/objects";
import { ContentIdendifierCompany } from "./ContentIdendifierCompany";

/**
 * For suspend/revive commands, this contains the {@link Provider} id, version keys, owning {@link Company.id}, and suspended state.
 **/
export class ContentIdendifierSuspended extends ContentIdendifierCompany {
	/**
	 * Creates a {@link ContentIdendifierSuspended} from a JSON object.
	 * @param json - JSON object to create the {@link ContentIdendifierSuspended} from.
	 * @returns A {@link ContentIdendifierSuspended} instance or nothing.
	 */
	static override fromJSON(json: any): ContentIdendifierSuspended | nothing {
		return json
			? new ContentIdendifierSuspended(json)
			: null;
	}

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