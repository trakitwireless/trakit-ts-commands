import { Reply } from "../../API/Responses/Reply";
import { RepPlaceDelete } from "../Responses/RepPlaceDelete";
import { PayPlace } from "./PayPlace";

/**
 * Restores a deleted {@link Place}.
 */
export class PayPlaceRestore extends PayPlace { 
	override createReply(json: JsonObject): Reply {
		return new RepPlaceDelete(json as JsonObject);
	}
}