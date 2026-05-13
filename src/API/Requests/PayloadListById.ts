import { JsonObject, nothing, ulong, utility } from "@trakit/objects";
import { PayloadListBy } from "./PayloadListBy";

/**
 * For commands that list objects by an ulong value.
 */
export abstract class PayloadListById extends PayloadListBy {
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
		this.lowest = json?.lowest as ulong;
		this.highest = json?.highest as ulong;
	}

	override toJSON(): JsonObject {
		const json = super.toJSON();
		if (utility.isntNaN(this.lowest)) json.lowest = this.lowest;
		if (utility.isntNaN(this.highest)) json.highest = this.highest;
		return json;
	}
}