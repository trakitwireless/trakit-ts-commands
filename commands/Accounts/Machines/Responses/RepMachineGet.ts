import { Machine, nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link machine}.
 **/
export class RepMachineGet extends Reply {
	/**
	 * The requested {@link Machine}.
	 **/
	machine: Machine | nothing;

	constructor(json: any) {
		super(json);
		if (json?.machine) {
			this.machine = new Machine(json.machine);
		}
	}
}