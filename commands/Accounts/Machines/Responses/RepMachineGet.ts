import { JsonObject, Machine, nothing } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link machine}.
 **/
export class RepMachineGet extends ReplySyncGet<Machine> {
	/**
	 * The requested {@link Machine}.
	 **/
	machine: Machine | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.machine) {
			this.machine = new Machine(json.machine as JsonObject);
		}
	}
}