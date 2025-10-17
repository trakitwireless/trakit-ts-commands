import { JsonObject } from "@trakit/objects";
import { RepPlaceDelete } from "../Responses/RepPlaceDelete";
import { Reply } from "../../API/Responses/Reply";
import { PayPlace } from "./PayPlace";

/**
 * Deletes an existing {@link Place}.
 */
export class PayPlaceDelete extends PayPlace { 
	override createReply(json: JsonObject): Reply {
		return new RepPlaceDelete(json);
	}
}