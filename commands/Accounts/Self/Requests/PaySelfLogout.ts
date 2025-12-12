import { JsonObject, SyncName } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { RepSelfLogout } from "../Responses/RepSelfLogout";

/**
 * 
 **/
export class PaySelfLogout extends Payload { 
	override getAction(): {
		kind: "Delete",
		object: SyncName,
		filter: "Logout",
		batch: false,
	} {
		return {
			kind: "Delete",
			object: "Self" as SyncName,
			filter: "Logout",
			batch: false,
		};
	}
	override createReply(json: JsonObject): Reply {
		return new RepSelfLogout(json);
	}
}