import { JsonObject, ulong, utility } from '@trakit/objects';
import { Payload } from './Payload';

/**
 * 
 */
export abstract class PayListBy extends Payload {
	/**
	 * The maximum number of items to return.
	 * If not specified, the server will return all.
	 **/
	limit?: ulong;

	constructor(json?: JsonObject) {
		super(json);
		this.limit = json?.limit as ulong;
	}

	override toJSON(): JsonObject {
		const json = super.toJSON();
		if (utility.isntNaN(this.limit)) json.limit = this.limit;
		return json;
	}
}