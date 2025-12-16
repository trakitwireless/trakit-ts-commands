import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { RepDispatchJobDelete } from "../Responses/RepDispatchJobDelete";
import { PayDispatchJob } from "./PayDispatchJob";

/**
 * Restores a deleted {@link DispatchJob}.
 */
export class PayDispatchJobRestore extends PayDispatchJob { 
	override createReply(json: JsonObject): Reply {
		return new RepDispatchJobDelete(json);
	}
}