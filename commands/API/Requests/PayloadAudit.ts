import { JsonObject, nothing, SyncName, ulong, utility } from "@trakit/objects";
import { IPaySingle } from "../../API/Requests/IPaySingle";
import { ActionType, } from "../../API/Requests/Payload";
import { PayloadListBy } from "./PayloadListBy";

/**
 * Interface for requests that filter by date.
 */
export abstract class PayloadAudit extends PayloadListBy implements IPaySingle {
	/**
	 * The start date for the filter.
	 */
	after: Date | nothing;
	/**
	 * The end date for the filter.
	 */
	before: Date | nothing;
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
		this.after = utility.date(json?.after as string);
		this.before = utility.date(json?.before as string);
		this.lowest = json?.lowest as ulong | nothing;
		this.highest = json?.highest as ulong | nothing;
	}
	override toJSON(): JsonObject {
		const json = super.toJSON();
		if (utility.isntNaN(this.after?.valueOf())) json.after = this.after.toISOString();
		if (utility.isntNaN(this.before?.valueOf())) json.before = this.before.toISOString();
		if (utility.isntNaN(this.lowest)) json.lowest = this.lowest;
		if (utility.isntNaN(this.highest)) json.highest = this.highest;
		return json;
	}
	/**
	 * Gets the key of the object whose change history is being requested.
	 */
	abstract getKey(): string;
	/**
	 * Overridden with common values for all audit requests.
	 * @returns 
	 */
	override getAction() {
		return {
			//...super.getAction(), => don't bother
			kind: "List" as ActionType,
			object: "" as SyncName,	// this needs to be overridden in the child class
			filter: "",
			batch: false,
		};
	}
}