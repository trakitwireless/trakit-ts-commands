import { JsonObject, nothing, utility } from "@trakit/objects";
import { PayListBy } from "./PayListBy";

/**
 * Interface for requests that filter by date.
 **/
export abstract class PayListByDate extends PayListBy {
	/**
	 * The start date for the filter.
	 **/
	after: Date | nothing;
	/**
	 * The end date for the filter.
	 **/
	before: Date | nothing;

	constructor(json?: JsonObject) {
		super(json);
		this.after = utility.date(json?.after as string);
		this.before = utility.date(json?.before as string);
	}
	override toJSON(): JsonObject {
		const json = super.toJSON();
		if (utility.isntNaN(this.after?.valueOf())) json.after = this.after.toISOString();
		if (utility.isntNaN(this.before?.valueOf())) json.before = this.before.toISOString();
		return json;
	}
}