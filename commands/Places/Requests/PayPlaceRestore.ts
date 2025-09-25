import { Reply } from "../../API/Responses/Reply";
import { RepPlaceDelete } from "../Responses/RepPlaceDelete";
import { PayPlace } from "./PayPlace";

/**
 * Restores a deleted {@link Place}.
 */
export class PayPlaceRestore extends PayPlace { 
	override createReply(json: any): Reply {
		return new RepPlaceDelete(json);
	}
}