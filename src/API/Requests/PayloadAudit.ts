import { JsonObject, nothing, SyncName, uint, utility } from "@trakit/objects";
import { IPaySingle } from "./IPaySingle";
import { ActionType, } from "./Payload";
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
	 * The lowest version key in the range.
	 */
	min: uint | nothing;
	/**
	 * The highest version key in the range.
	 */
	max: uint | nothing;

	constructor(json?: JsonObject) {
		super(json);
		this.after = utility.date(json?.after as string);
		this.before = utility.date(json?.before as string);
		this.min = json?.min as uint | nothing;
		this.max = json?.max as uint | nothing;
	}
	override toJSON(): JsonObject {
		const json: JsonObject = super.toJSON();
		if (utility.isntNaN(this.after?.valueOf())) json.after = this.after.toJSON();
		if (utility.isntNaN(this.before?.valueOf())) json.before = this.before.toJSON();
		if (utility.isntNaN(this.min)) json.min = this.min;
		if (utility.isntNaN(this.max)) json.max = this.max;
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