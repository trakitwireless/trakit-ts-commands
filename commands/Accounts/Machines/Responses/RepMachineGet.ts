import { Machine } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link machine}.
 **/
export class RepMachineGet extends Reply {
	/**
	 * The requested {@link Machine}.
	 **/
	machine: Machine;

	constructor(json: any) {
		super(json);
		this.machine = new Machine(json?.machine);
	}
}