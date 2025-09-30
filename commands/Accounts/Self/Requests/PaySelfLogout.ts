import { JsonObject } from "@trakit/objects";
import { Reply } from "index";
import { Payload } from "../../../API/Requests/Payload";
import { RepSelfLogout } from "../Responses/RepSelfLogout";

/**
 * 
 **/
export class PaySelfLogout extends Payload { 
	override getAction(): {
		kind: "Delete",
		object: "Self",
		filter: "Logout",
		batch: false,
	} {
		return {
			kind: "Delete",
			object: "Self",
			filter: "Logout",
			batch: false,
		};
	}
	override createReply(json?: JsonObject): Reply {
		return new RepSelfLogout(json as JsonObject);
	}
}