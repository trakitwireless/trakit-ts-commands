import { JsonObject, nothing, ulong, utility } from "@trakit/objects";
import { PayloadAudit } from "./PayloadAudit";

/**
 * Interface for requests that filter by date.
 */
export abstract class PayloadAuditForId extends PayloadAudit {
	/**
	 * The lowest ID in the range.
	 */
	lowest: ulong | nothing;
	/**
	 * The highest ID in the range.
	 */
	highest: ulong | nothing;

	constructor(json?: JsonObject) {
		super(json);
		this.lowest = json?.lowest as ulong | nothing;
		this.highest = json?.highest as ulong | nothing;
	}
	override toJSON(): JsonObject {
		const json: JsonObject = super.toJSON();
		if (utility.isntNaN(this.lowest)) json.lowest = this.lowest;
		if (utility.isntNaN(this.highest)) json.highest = this.highest;
		return json;
	}
}