import { PayPlace } from "./PayPlace";

/**
 * Restores a deleted {@link Place}.
 */
export class PayPlaceRestore extends PayPlace { 
	override createReply(json: any): Reply {
		return new RepPlaceRestore(json);
	}
}