import { JsonObject, email, guid, nothing } from "@trakit/objects";
import { PayloadAudit } from "./PayloadAudit";

/**
 * Interface for requests that filter by date.
 */
export abstract class PayloadAuditForString extends PayloadAudit {
	/**
	 * The first value alphabetically.
	 */
	first: email | guid | nothing;
	/**
	 * The last value alphabetically.
	 */
	last: email | guid | nothing;

	constructor(json?: JsonObject) {
		super(json);
		this.first = json?.first as email | guid | nothing;
		this.last = json?.last as email | guid | nothing;
	}
	override toJSON(): JsonObject {
		const json: JsonObject = super.toJSON();
		if (this.first) json.first = this.first;
		if (this.last) json.last = this.last;
		return json;
	}
}