import { Reply } from "index";
import { Payload } from "../../../API/Requests/Payload";
import { RepSelfLogout } from "../Responses/RepSelfLogout";

/**
 * 
 **/
export class PaySelfLogout extends Payload { 
	override getAction(): {
		kind: "Merge",
		object: "Self",
		filter: "Logout",
		batch: false,
	} {
		return {
			kind: "Merge",
			object: "Self",
			filter: "Logout",
			batch: false,
		};
	}
	override createReply(json: any): Reply {
		return new RepSelfLogout(json);
	}
}