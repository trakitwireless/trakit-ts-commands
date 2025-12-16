import { JsonObject, nothing, uint } from "@trakit/objects";
import { ContentIdCompany } from "./ContentIdCompany";

/**
 * For suspend/revive commands, this contains the id, version keys, owning {@link Company.id}, and suspended state.
 */
export class ContentIdSuspended extends ContentIdCompany {
	/**
	 * Creates a {@link ContentIdSuspended} from a JSON object.
	 * @param json - JSON object to create the {@link ContentIdSuspended} from.
	 * @returns A {@link ContentIdSuspended} instance or nothing.
	 */
	static override fromJSON(json: JsonObject): ContentIdSuspended | nothing {
		return json
			? new ContentIdSuspended(json)
			: null;
	}

	/**
	 * Flag showing if the object is suspended.
	 */
	suspended: boolean;
	/**
	 * Object version keys used to validate synchronization for all object properties.
	 */
	v: uint[];

	constructor(json: JsonObject) {
		super(json);
		this.suspended = !!(json?.suspended);
		this.v = json?.v as uint[] ?? [];
	}

	override toJSON() {
		return {
			...super.toJSON(),
			suspended: !!this.suspended,
			v: [...this.v],
		};
	}
}