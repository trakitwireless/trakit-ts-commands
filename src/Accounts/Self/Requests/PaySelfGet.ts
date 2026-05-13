import { JsonObject ,SyncName } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepSelfGet } from "../Responses/RepSelfGet";

/**
 * 
 */
export class PaySelfGet extends Payload {
	override getAction(): {
		kind: "Get",
		object: SyncName,
		filter: "",
		batch: false,
	} {
		return {
			kind: "Get",
			object: "Self" as SyncName,
			filter: "",
			batch: false,
		};
	}
	override createReply(json: JsonObject): Reply {
		return new RepSelfGet(json);
	}
}