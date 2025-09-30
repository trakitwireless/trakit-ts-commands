import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { RepMachineDelete } from "../Responses/RepMachineDelete";
import { PayMachine } from "./PayMachine";

/**
 * Deletes an existing {@link Machine}.
 **/
export class PayMachineDelete extends PayMachine { 
	override createReply(json?: JsonObject): Reply {
		return new RepMachineDelete(json as JsonObject);
	}
}