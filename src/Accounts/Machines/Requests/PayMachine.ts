import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamKey } from "../../../API/Requests/Parameters/ParamKey";
import { Payload } from "../../../API/Requests/Payload";

/**
 * A container for the {@link machine} object.
 */
export abstract class PayMachine extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link Machine}.
	 */
	machine: ParamKey;

	constructor(json?: JsonObject) {
		super(json);
		this.machine = new ParamKey(json?.machine as JsonObject);
	}
	/**
	 * 
	 */
	getKey(): string {
		return this.machine?.key ?? "";
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			machine: this.machine.toJSON(),
		};
	}
}