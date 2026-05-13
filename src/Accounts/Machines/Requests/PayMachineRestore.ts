import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { RepMachineDelete } from "../Responses/RepMachineDelete";
import { PayMachine } from "./PayMachine";

/**
 * Restores a deleted {@link Machine}.
 */
export class PayMachineRestore extends PayMachine { 
	override createReply(json: JsonObject): Reply {
		return new RepMachineDelete(json);
	}
}