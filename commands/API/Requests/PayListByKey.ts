import { JsonObject, nothing } from "@trakit/objects";
import { PayListBy } from "./PayListBy";

/**
 * Interface for requests on a list of objects by key.
 **/
export abstract class PayListByKey extends PayListBy {
	/**
	 * The first key to filter the list by.
	 **/
	first: string | nothing;
	/**
	 * The last key to filter the list by.
	 **/
	last: string | nothing;

	constructor(json?: JsonObject) {
		super(json);
		this.first = json?.first as string;
		this.last = json?.last as string;
	}

	override toJSON(): JsonObject {
		const json = super.toJSON();
		if (this.first?.trim()) json.first = this.first;
		if (this.last?.trim()) json.last = this.last;
		return json;
	}
}