import { JsonObject } from "@trakit/objects";
import { RepDispatchJobDelete } from "../Responses/RepDispatchJobDelete";
import { Reply } from "../../../API/Responses/Reply";
import { PayDispatchJob } from "./PayDispatchJob";

/**
 * Deletes an existing {@link DispatchJob}.
 **/
export class PayDispatchJobDelete extends PayDispatchJob { 
	override createReply(json: JsonObject): Reply {
		return new RepDispatchJobDelete(json as JsonObject);
	}
}